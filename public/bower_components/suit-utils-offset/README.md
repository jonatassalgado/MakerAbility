# SUIT CSS utilities: offset

SUIT CSS offset utilities.

Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](http://npmjs.org/): `npm install suitcss-utils-offset`
* [Component(1)](http://component.io/): `component install suitcss/utils-offset`
* [Bower](http://bower.io/): `bower install suit-utils-offset`
* Download: [zip](https://github.com/suitcss/utils-offset/zipball/master)

…is a convenient way to install the SUIT CSS offset utilities:

* [utils-after](https://github.com/suitcss/utils-after)
* [utils-before](https://github.com/suitcss/utils-before)

### Configuration

There are 3 Media Query breakpoints:

* `--sm-viewport`
* `--md-viewport`
* `min-width: 1025px`

When using the [SUIT CSS preprocessor](https://github.com/suitcss/preprocessor),
breakpoints can be configured using `@custom-media`. For example:

```css
@custom-media --sm-viewport (min-width:320px) and (max-width:640px);
@custom-media --md-viewport (min-width:640px) and (max-width:960px);
@custom-media min-width: 1025px (min-width:960px);
```

## Usage

Please refer to the individual packages and the README for [SUIT
CSS utils](https://github.com/suitcss/utils/).
