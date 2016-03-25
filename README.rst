=======
Granite
=======

A `Sphinx <http://sphinx-doc.org/>`_ theme for API docs. This theme was heavily
inspird by the `ReadTheDocs Theme <https://github.com/snide/sphinx_rtd_theme>`_,
but is implemented using `Bootstrap 4 <http://v4-alpha.getbootstrap.com/>`_.

Example:

.. code-block:: rst

    =========
    Fibonacci
    =========

    In mathematics, the Fibonacci numbers or Fibonacci sequence are the numbers in
    the following integer sequence:

    .. math::

        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

    .. container:: example python

        Here's how the `nth` Fibonacci number can be calculated in **Python**:

        .. code-block:: python

            def fibo(n):
                if n <= 2:
                    return 1
                return fibo(n - 1) + fibo(n - 2)

    .. container:: example  ruby

        Here's how the `nth` Fibonacci number can be calculated in **Ruby**:

        .. code-block:: ruby

            def fibo(n)
                return 1 if n <= 2
                fibo(n - 1) + fibo(n - 2)
            end

    .. container:: example javascript

        Here's how the `nth` Fibonacci number can be calculated in **Javascript**:

        .. code-block:: javascript

            var fibo = function(n) {
                if(n <= 2) {
                    return 1;
                }
                return this.fibo(n - 1) + this.fibo(n - 2);
            };

    The Fibonacci sequence is named after Italian mathematician Fibonacci. His 1202
    book Liber Abaci introduced the sequence to Western European mathematics,
    although the sequence had been described earlier in Indian mathematics. By
    modern convention, the sequence begins either with :math:`F0 = 0` or with
    :math:`F1 = 1`. The Liber Abaci began the sequence with :math:`F1 = 1`.

    Source: https://en.wikipedia.org/wiki/Fibonacci_number


.. image:: screenshot.png
