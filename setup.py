from granite import __version__

try:
    from setuptools import setup, find_packages
except ImportError:
    from distutils.core import setup, find_packages

setup(
    name='sphinx-granite',
    version=__version__,
    license='MIT',
    url='https://github.com/dmpayton/sphinx-granite/',

    description='A theme for Sphinx.',
    long_description=open('./README.rst', 'r').read(),
    keywords='sphinx theme'
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],

    author='Derek Payton',
    author_email='derek.payton@gmail.com',

    install_requires=open('requirements.txt').read().splitlines(),
    include_package_data=True,
    packages=['granite'],
    package_data={'granite': [
        'theme.conf',
        '*.html',
        'static/css/*.css',
        'static/js/*.js',
        'static/font/*.*'
    ]},
    zip_safe=False,
)
