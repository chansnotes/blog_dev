---
layout: PostLayout
---

# First Demo

# h1 Heading 8-)

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> 넓은 의미에서 도메인이란 한 조직이 행하는 일과 그 조직 안의 세계를 일컫는다.
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

> 넓은 의미에서 도메인이란 한 조직이 행하는 일과 그 조직 안의 세계를 일컫는다.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
1. askdmasldkm
1. lkmalkdmkl
1. askldmaskldm
   1. aslkdmaslkdmlasd
   1. eieieiei
   1. eieieieiei
   - aslkdmaslkdmlkasmdl
   - askldmasldmlk
     - aslkdmlkqmweklmklqmkl
     1. didididi
     2. dkdkdkdk
     3. asdklmasldmlak
        1. asdlmzlkcmklzm
1. Consectetur adipiscing elit
1. Integer molestie lorem at massa

1) You can use sequential numbers...
1) ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`
`할 수 없는 거지 모.... 이건 진리야`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
// Comment block
var foo = function(bar) {
  return bar++
}

console.log(foo(5))
```

```java
// Comment block
var foo = function(bar) { return bar++ } console.log(foo(5))
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
_Fig1. This is Caption_

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg 'The Dojocat'

## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
  19<sub>th</sub>
  19<sup>th</sup>

- H~2~O

### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++
<ins>Inserted</ins>

### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==
<mark>Marked</mark>

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

  and multiple paragraphs.

[^second]: Footnote text.
