# xpath-action

This action executes XPath 1.0 expression on a given document. It uses [xmldom](https://github.com/xmldom/xmldom) and [xpath](https://github.com/goto100/xpath) modules for Node.js.

## Inputs

### `filename`
**Required** The path to HTML or XML document.

### `expression`
**Required** XPath 1.0 expression.

### `namespaces`
**Optional** XML namespaces in JSON format.

## Outputs

### `result`

Evaluated items joined with a newline.

## Example usage
```
uses: QwerMike/xpath-action@v1
with:
  filename: 'test.xml'
  expression: '//movie/year/text()'
```

## License
[MIT License](LICENSE.md)
