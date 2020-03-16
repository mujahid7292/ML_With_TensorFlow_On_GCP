from setuptools import find_packages
from setuptools import setup

REQUIRED_PACKAGES=[

]

setup(
    name='taxifare',
    version='0.1',
    author='Saifullah Al Mujahid',
    author_email='mujahid7292@gmail.com',
    install_requires=REQUIRED_PACKAGES,
    packages=find_packages(),
    include_package_data=True,
    description="Taxifare In Cloul Ml",
    requires=[]
)
