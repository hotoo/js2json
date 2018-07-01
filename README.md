# README

Convert JavaScript Object/Array to JSON format via node Stream.

## Example

copy js object into a.json file:

```json
{
  str: 'str',
  num: 1,
  boo: true,
  nil: null,
  arr: [0, '1', true],
  obj: {
    str: 'obj.str',
    num: 2,
    boo: false,
    nil: null,
  },
}
```

and use js2json commend to convert:

```bash
$ cat a.json | js2json
{
  "str": "str",
  "num": 1,
  "boo": true,
  "nil": null,
  "arr": [
    0,
    "1",
    true
  ],
  "obj": {
    "str": "obj.str",
    "num": 1.2,
    "boo": false,
    "nil": null
  }
}
```

## for Vim user

```vimrc
autocmd FileType json setlocal formatprg=js2json|jsonmatter " npm i @hotoo/js2json jsonmatter -g
```

Convert and format JavaScript object to JSON format, by command `gggqG` in normal mode.
