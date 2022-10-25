# Commercetools Messages

This library mocks the Commercetools messages to ease testing of your typescript codebases.

## Installation
For npm:
* `npm i @peepoglad/commercetools-messages --save-dev`

For yarn:
* `yarn add @peepoglad/commercetools-messages --dev`

## Usage
To build payload, import the package into your file:

```typescript
import { ProductAddedToCategoryMessage } from '@commercetools/platform-sdk'
import { ProductAddedToCategory } from '@peepoglad/commercetools-messages'

const payload: ProductAddedToCategoryMessage = ProductAddedToCategory()
  .id('gigaId')
  .build()

...
```

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-giga-feature`
3. Commit your changes: `git commit -am 'Add some giga feature'`
4. Push to the branch: `git push origin my-new-giga-feature`
5. Submit a pull request :D