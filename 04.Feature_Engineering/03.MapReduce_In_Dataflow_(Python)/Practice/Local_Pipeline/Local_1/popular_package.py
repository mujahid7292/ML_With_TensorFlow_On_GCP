import apache_beam as beam
import argparse

def startsWith(line, term):
    """
    This function will return line, if the first word of the line
    has the specified term. i,e: import
    """
    if line.startswith(term):
        yield line

def splitPackageName(packageName):
    """
    e.g: given com.example.appname.library.widegetName
    returns: com
             com.example
             com.example.appname
             com.example.appname.library
             com.example.appname.library.widegetName
    etc
    """
    # Create a dictionary which will store Word
    results = []
    # Create a variable 'end' which will store number of
    # letter before the first dot(.)
    end = packageName.find('.')
    # Now run the while loop if number of letter in the 'end'
    # variable is more than 1
    while end > 0:
        # Now add the package name to the dictionary
        results.append(packageName[0:end])
        # Now set the new number for our 'end' variable(e,g: it will be
        # previous variable value + number of word before next dot + 1)
        end = packageName.find('.', end + 1)
    # Now add the whole package name as it is in the dictionary
    # called 'results'
    results.append(packageName)
    return results

def getPackages(line, keyword):
    """
    This function will return below package name
        `org.apache.beam.sdk.options.PipelineOptionsFactory`
    Given this below line
        `import org.apache.beam.sdk.options.PipelineOptionsFactory;`
    """
    # First find the position of the word e,g: import in the line
    position_keyword = line.find(keyword)
    # As the word import is the first word in the line, so after above
    # line this variable 'position' will be set to zero

    # Now find the length of the 'keyword'
    length_keyword = len(keyword)

    # Now set the start position of the line
    # 6   =         0        +       6
    start = position_keyword + length_keyword
    # So start position will set on
    #   ` org.apache.beam.sdk.options.PipelineOptionsFactory;`
    # Here first letter is space sign

    # Now find the end position of the line
    # We will take word untill ';' this letter
    # 57= import org.apache.beam.sdk.options.PipelineOptionsFactory          
    end = line.find(';', start)
    # After this above line 'end' variable's value will be set as 57

    # Now we will strip off the line
    if end > start:
        packageName = line[start:end].strip()
        # This above line will strip off 'import' and ';' from
        # the line
        return splitPackageName(packageName)
    return []

def packageUse(line, keyWord):
    """
    This function will take line like below
        `import org.apache.beam.sdk.options.PipelineOptionsFactory;`
    and will return first package name like below
        `org`
    """
    packages = getPackages(line, keyWord)
    # After this above line 'packages' variable will set to
    # a dictionary containing:
    #   [
    #   org
    #   org.apache
    #   org.apache.beam
    #   org.apache.beam.sdk
    #   org.apache.beam.sdk.options
    #   org.apache.beam.sdk.options.PipelineOptionsFactory
    #   ]

    # From above 'packages' dictionary we will yield the first word 'org'
    for p in packages:
        yield(p,1)

def by_value(kv1, kv2):
    key1, value1 = kv1
    key2, value2 = kv2
    return value1 < value2

if __name__ == '__main__':
    # Create a parser object
    parser = argparse.ArgumentParser(description='Find the most used java packages')
    parser.add_argument(
        '--output_prefix',
        default='./output',
        help='Output Prefix'
    )
    parser.add_argument(
        '--input',
        default='./data/',
        help='Input Directory'
    )

    options, pipeline_args = parser.parse_known_args()
    # Now create a pipeline object
    p = beam.Pipeline(argv=pipeline_args)

    input = '{0}*.java'.format(options.input)
    output_prefix = options.output_prefix
    keyword = 'import'

    # Now we will decorate our pipeline
    (p
        # First we will get our java file
        | 'GetJava' >> beam.io.ReadFromText(input)
        # Second, we will go through each line of the java file and take the
        # line which starts with 'import'
        | 'GetImports' >> beam.FlatMap(lambda line: startsWith(line, keyword))
        # Third, we will get the dictionary of packages from each line. Say we have
        # a line like 'org.apache.beam.sdk.options.PipelineOptionsFactory' this
        # So we will get a dictionary of package list like this
        #   [
        #   org
        #   org.apache
        #   org.apache.beam
        #   org.apache.beam.sdk
        #   org.apache.beam.sdk.options
        #   org.apache.beam.sdk.options.PipelineOptionsFactory
        #   ]
        | 'PackageUse' >> beam.FlatMap(lambda line: packageUse(line, keyword))
        # Fourth, we will aggregate our package by total number of occurance. i,e:
        #   PackageName                                       Number Of Times Appeared
        #   org                                                          20
        #   org.apache                                                   18
        #   org.apache.beam                                              16
        #   org.apache.beam.sdk                                          14   
        #   org.apache.beam.sdk.options                                  12
        #   org.apache.beam.sdk.options.PipelineOptionsFactory            2
        | 'TotalUse' >> beam.CombinePerKey(sum)
        # Fifth, we will take the top 5 packages
        | 'Top_5' >> beam.transforms.combiners.Top.Of(5, by_value)
        # Now we will write this top 5 package names in out ouput directory
        | 'Write' >> beam.io.WriteToText(output_prefix)
    )


    # Now we will run our pipeline in below line
    p.run().wait_until_finish()