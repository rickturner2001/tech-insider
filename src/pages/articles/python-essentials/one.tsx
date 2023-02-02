import CodeBlock from "@/components/CodeBlock";

import light from "prism-react-renderer/themes/github";
import dark from "prism-react-renderer/themes/dracula";
import { useContext } from "react";
import themeContext from "@/themeContext";
import pythonBanner from "../../../../public/assets/articles/python-fundamentals/python-fundamentals-img.jpg";
import Layout from "@/layouts/Layout";

const mapSnippetOne = `def double(x):
    return 2 * x
numbers = [1, 2, 3, 4]
doubled_numbers = []
for number in numbers:
    doubled_numbers.append(double(number))
print(doubled_numbers)
`;

const mapSnippetTwo = `numbers = [1, 2, 3, 4]
doubled_numbers = list(map(lambda x: 2 * x, numbers))
print(doubled_numbers)
`;

const filterSnippetOne = `numbers = [1, 2, 3, 4, 5]
even_numbers = []
for number in numbers:
    if number % 2 == 0:
        even_numbers.append(number)
print(even_numbers)
`;

const filterSnippetTwo = `numbers = [1, 2, 3, 4, 5]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)
`;

const reduceExplain = `reduce(function, iterable, initializer=None)
`;

const reduceSnippetOne = `from operator import mul
from functools import reduce
numbers = [1, 2, 3, 4, 5]
product = 1
for number in numbers:
    product *= number
print(product)
`;

const reducesnippetTwo = `from functools import reduce
numbers = [1, 2, 3, 4, 5]
product = reduce(lambda x, y: x * y, numbers)
print(product)
`;

const enumeratesnippetOne = `fruits = ['apple', 'banana', 'cherry']
for index in fruits:
    print(f"{index + 1}: {fruits[index]}")`;

const enumeratesnippetTwo = `fruits = ['apple', 'banana', 'cherry']
for index, fruit in enumerate(fruits):
    print(f'{index + 1}: {fruit}')
`;

const enumerateOutput = `1: apple
2: banana
3: cherry
`;

const permutationSnippetOne = `def permutations(data, i, length):
    if i == length:
        print(data)
    else:
        for j in range(i, length):
            data[i], data[j] = data[j], data[i]
            permutations(data, i + 1, length)
            data[i], data[j] = data[j], data[i]
fruits = ['apple', 'banana', 'cherry']
permutations(fruits, 0, len(fruits))
`;
const permutationSnippetTwo = `import itertools
fruits = ['apple', 'banana', 'cherry']
permutations = list(itertools.permutations(fruits))
for permutation in permutations:
    print(permutation)
`;
const permutationOutput = `('apple', 'banana', 'cherry')
('apple', 'cherry', 'banana')
('banana', 'apple', 'cherry')
('banana', 'cherry', 'apple')
('cherry', 'apple', 'banana')
('cherry', 'banana', 'apple')
`;

const PageContent = () => {
  const { isDarkTheme: isDarkmode } = useContext(themeContext);

  return (
    <section className="prose md:mx-auto py-24 dark:prose-invert md:prose-lg sm:prose prose-sm lg:prose-xl">
      <h1>Maximizing Productivity: Essential Tips for Python Developers</h1>
      <p className="text-gray-500 dark:text-gray-400">
        31 January, 2023 — 10 min read
      </p>
      <img src={pythonBanner.src} className="w-full h-full object-cover" />
      <p className="text-right text-xs text-gray-500 dark:text-gray-300">
        Photo by{" "}
        <a
          className="text-gray-600 dark:text-gray-400"
          href="https://unsplash.com/@emilep?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Emile Perron
        </a>{" "}
        on{" "}
        <a
          className="text-gray-600 dark:text-gray-400"
          href="https://unsplash.com/photos/xrVDYZRGdw4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </p>
      <hr />
      <ol className="prose-ol:list-none">
        <li className="">
          <a className="text-violet-600 dark:text-violet-400" href="#one">
            The map function
          </a>
        </li>
        <li className="">
          <a className="text-violet-600 dark:text-violet-400" href="#two">
            The filter function
          </a>
        </li>
        <li className="">
          <a className="text-violet-600 dark:text-violet-400" href="#three">
            The reduce function
          </a>
        </li>
        <li className="">
          <a className="text-violet-600 dark:text-violet-400" href="#four">
            The enumerate function
          </a>
        </li>
        <li className="">
          <a className="text-violet-600 dark:text-violet-400" href="#five">
            Finding all permutations
          </a>
        </li>
      </ol>
      <hr />
      <br />
      Python is a general-purpose language widely used by developers due to its
      ease of use and rich API. However, once you&apos;re comfortable with
      Python, it&apos;s important to explore its advanced features to help you
      be more productive and write more efficient code. This article introduces
      5 advanced features of Python that can help you achieve this.
      <hr />
      <br />
      <h3 id="one">1. The map function</h3>
      <p>
        <code>map</code> function is a built-in Python method that allows you to
        apply a function to every item in an iterable (e.g. list, tuple, etc.).
        This function is highly optimized, making it an excellent tool for
        improving the performance of our code.
      </p>
      <p>
        Here&apos;s an example of using for loops and a function to apply to
        items in an array:
      </p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language="python"
        code={mapSnippetOne}
      />
      <p>
        Here&apos;s the compact version using the <code>map</code>and{" "}
        <code>lambda</code>
        approach:
      </p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language="python"
        code={mapSnippetTwo}
      />
      <p>This code outputs:</p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language="python"
        code={"[2, 4, 6, 8]"}
      />
      <p>
        As we can see, the map and lambda approach is more concise and easier to
        read, making it a valuable tool in our Python toolkit.
      </p>
      <hr />
      <br />
      <h3 id="two">2. The filter function:</h3>
      <p>
        The filter function is another built-in Python function that is used to
        filter items in an iterable based on a specified condition. This
        function is highly optimized and can be used to reduce the amount of
        code needed to perform a filter operation.
      </p>
      <p>
        Here&apos;s an example of using a for loop and if statements to filter
        items in an array:
      </p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language="python"
        code={filterSnippetOne}
      />
      <p>Here&apos;s the compact version using the filter built-in function:</p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language="python"
        code={filterSnippetTwo}
      />
      <p>This code outputs:</p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language="python"
        code="[2, 4]"
      />
      <h3 id="three">3. The reduce function</h3>
      <p>
        The <code>reduce</code> function is another great function that comes
        with the core Python installation. However, this method is part of the
        functools module, therefore we&apos;ll need to import it if we intend to
        use it. Reduce might sound familiar to those of you who come from
        javascript, in fact, the methods do share the same functionality in that
        this function is used to apply a function to the items in an iterable so
        as to reduce the iterable to a single value
      </p>
      <p>
        Here&apos;s a detailed explanation of the syntax of the reduce function:
      </p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language={"python"}
        code={reduceExplain}
      />
      <ul>
        <li>
          <code>function</code> This is the function that will be applied to the
          items in the <code>iterable</code>. It must take two arguments and
          return a single value.
        </li>
        <li>
          <code>Iterable</code> This is the iterable (collection) that will be
          reduced.
        </li>
        <li>
          <code>Initializer</code> (optional): This is the initial value that
          will be passed to the <code>function</code> as its first argument. If
          not specified, the first item in the iterable will be used as the
          initial value (much like the initial accumulator value in javascript).
        </li>
      </ul>
      <p>
        Here&apos;s an example of reducing an iterable without the{" "}
        <code>reduce</code> function:
      </p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language={"python"}
        code={reduceSnippetOne}
      />
      <p>
        Here the same snippet of code using the <code>reduce</code> function:
      </p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language="python"
        code={reducesnippetTwo}
      />
      <p>This is the ouput for both snippets</p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language="python"
        code="120"
      />
      <p>
        In summary, the <code>reduce</code> function provides a more concise,
        performant, reusable, and abstract way of reducing an iterable to a
        single value compared to a for loop, making it an excellent tool for
        boosting our productivity as a Python developer.
      </p>
      <hr />
      <br />
      <h3 id="four">4. The enumerate function</h3>
      <p>
        The <code>enumerate</code> function is a built-in function in Python
        that is used to add a counter to an iterable. It&apos;s commonly used to
        loop over a list or other iterable and keep track of the index of each
        element.
      </p>
      <p>
        This is a great alternative to the usual <code>arr[i]</code> approach,
        as it makes our intentions explicit. When we use the enumerate function,
        we know we will at some point reference the item in the current
        iteration
      </p>
      <p>
        Here&apos;s an example of accessing an item inside a collection withouth
        using the <code>enumerate</code> function:
      </p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language={"python"}
        code={enumeratesnippetOne}
      />
      <p>
        And here&apos;s the same functionality implemented with{" "}
        <code>enumerate</code>
      </p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language="python"
        code={enumeratesnippetTwo}
      />
      <p>In both cases the output will be the following:</p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language="python"
        code={enumerateOutput}
      />
      <p>
        As we can see, the enumerate function provides a more concise and
        readable way of looping over an iterable and keeping track of the index
        of each element compared to using a for loop and manually incrementing a
        counter.
      </p>
      <h3 id="five">5. Finding all permutations</h3>
      <p>
        Whether it&apos;s an interview question or a problem on Leetcode,
        we&apos;ve all come across some sort situation where we are essentially
        asked to find all permutations of a collection
      </p>
      <p>
        THere are many approaches to finding the permutations of a collection.
        My personal favorite, is doing so by using a recursive implementation
      </p>
      <p>
        Here&apos;s the Python code to find all the permutations of an iterable
        without using external libraries
      </p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language="python"
        code={permutationSnippetOne}
      />
      <p>
        This works just fine, but why rely on our own implementation when we can
        use the built-in functionality that comes with the{" "}
        <code>functools</code> module.
      </p>
      <p>
        we can use the <code> itertools.permutations</code> function from the
        itertools module to find all permutations of a collection without using
        for loops. The itertools.permutations function takes an iterable and a
        length as arguments and returns an iterable of all possible permutations
        of the elements in the iterable.
      </p>
      <p>
        Here&apos;s an example of how we might use the{" "}
        <code>itertools.permutations</code> function:
      </p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language={"python"}
        code={permutationSnippetTwo}
      />
      <p>The output is the same for both implementations:</p>
      <CodeBlock
        theme={isDarkmode ? dark : light}
        language="python"
        code={permutationOutput}
      />
      <hr />
      <br />
      <h3>In conclusion</h3>
      <p>
        By understanding the built-in functions and libraries available in
        Python, we can simplify and streamline our code, reducing the amount of
        time and effort required to write and maintain it
      </p>
    </section>
  );
};

const pageContent = () => {
  return (
    <Layout>
      <PageContent />
    </Layout>
  );
};

export default pageContent;
