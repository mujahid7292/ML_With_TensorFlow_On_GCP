import apache_beam as beam
import sys

def find_name(line, name):
    if line.startswith(name):
        yield line

if __name__== '__main__':
    p = beam.Pipeline(argv=sys.argv)
    input = './data/*.txt'
    output_prefix = './output'
    searchterm='mujahid'

    # Find all the lines that contain the search term
    (p
        | 'GetTextFile' >> beam.io.ReadFromText(input)
        | 'find_name' >> beam.FlatMap(lambda line: find_name(line, searchterm))
        | 'Write' >> beam.io.WriteToText(output_prefix)
    )
    p.run().wait_until_finish()