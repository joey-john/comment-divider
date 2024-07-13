<p align="center">
    <img alt="Comment Divider" src="https://github.com/joey-john/comment-divider/raw/master/img/logo_256.png" width="20%"/>
</p>

<h1 align="center">
    Comment Divider
</h1>

This is **[Visual Studio Code](https://github.com/Microsoft/vscode)** extension, which provides commands for generating comment-wrapped separators from line content.

**[Supports all common languages](#language-support).**

**NOTE:** This extension is a fork of [Comment Divider by stackbreak](https://github.com/stackbreak/comment-divider). The intention of this fork is to add enhancements to the original extension.

## Install

<!-- TODO: UPDATE ON PUBLISH -->
https://marketplace.visualstudio.com/items?itemName=stackbreak.comment-divider 

## Demo

![Subheader Demo](img/sub-header.gif)

## Commands

### Make main header

* Default Shortcut
: **`Ctrl`** + **`Shift`** + **`Alt`** + **`X`**

* Default Style :
  ```
  /* -------------------------------------------------------------------------- */
  /*                                Example text                                */
  /* -------------------------------------------------------------------------- */
  ```

### Make subheader

* Default Shortcut
: **`Alt`** + **`X`**

* Default Style :
  ```
  /* ------------------------------ Example text ------------------------------ */
  ```

### Insert solid line

* Default Shortcut
:  **`Alt`** + **`Shift`** + **`X`**

* Default Style :
  ```
  /* -------------------------------------------------------------------------- */
  ```

## Language Support

Extension uses relevant comment characters for all common languages.

For example, in python files subheader looks like

```python
# ------------------------------ python example ------------------------------ #
```

or in html files

```html
<!-- ---------------------------- html example ----------------------------- -->
```

**Also, you can easily [add support](#languages-configuration) for any missing language or override the default preset.**

## Default Configuration

### Common

```json
  // Default Limiters Characters used when language is not predefined or found in comment-divider.languagesMap
  "comment-divider.limiters": ["/*". "*/"],
```

```json
  // Set line length for all dividers.
  "comment-divider.lineLen": 80,
```

```json
  // Set whether the divider will be shrink consider indent size, or will be always fixed length.
  "comment-divider.shouldLengthIncludeIndent": false,
```

- **if `shouldLengthIncludeIndent: false`**

  ```js
  /* --------------------------------- indent0 -------------------------------- */

      /* --------------------------------- indent1 -------------------------------- */

          /* --------------------------------- indent2 -------------------------------- */
  ```

- **if `shouldLengthIncludeIndent: true`**

  ```js
  /* --------------------------------- indent0 -------------------------------- */

      /* ------------------------------- indent1 ------------------------------ */

          /* ----------------------------- indent2 ---------------------------- */
  ```


### Main Header

```json
  // Set default symbol for main header line filling (only one).
  "comment-divider.mainHeader.filler": "-",

  // Set main header vertical style.
  "comment-divider.mainHeader.height": "block",

  // Set main header text align.
  "comment-divider.mainHeader.align": "center",

  // Set main header text transform style.
  "comment-divider.mainHeader.transform": "none",
```

### Subheader

```json
  // Set symbol for subheader line filling (only one).
  "comment-divider.subheader.filler": "-",

  // Set subheader vertical style.
  "comment-divider.subheader.height": "line",

  // Set subheader text align.
  "comment-divider.subheader.align": "center",

  // Set subheader text transform style.
  "comment-divider.subheader.transform": "none",
```

### Solid Line

```json
  // Set symbol for solid line filling.
  "comment-divider.line.filler": "-",
```

## Languages Configuration

If some language is not supported out of the box, or you want to change the default settings for an already supported language, it is possible to do it in the settings.

```json
"comment-divider.languagesMap": {
  "python": {
    "limiters": ["#", "#"],
    "mainHeader": {
      "align": "left",
      "filler": "+",
      "height": "block",
      "transform": "uppercase"
    },
    "subheader": {
      "align": "right",
      "filler": "*",
      "transform": "titlecase"    
    },
    "line": {
      "filler": "~",
    }
  },
  "c": {
    "limiters": ["//"]
  }
}
```

The item name is the language mode name and is associated with an object with the following fields

  * `limiters`
  : _(required)_ Comment Symbols. The first element is used at the start of the line and the second, if defined, is placed at the end.

  * `mainHeader` | `subheader`
  : _(optional)_ Language settings for the specified header. Has the following optional properties:
    
    * `align`
    : language specific header text alignement

    * `filler` 
    : language specific header line filler character

    * `height`
    : language specific header vertical style

    * `transform`
    : language specific header text transform style

  * `line`
  : _(optional)_ Language settings for the solid line. Has the following optional properties:
    * `filler`
    : solid line filler character

_Note:_ For any symbol not defined, the corresponding default filler symbol defined in the settings will be used.

The example above overrides `python` and `c` defaults. As a result, the headers for these languages look like this:

```python
# ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ #
# PYTHON HEADER                                                                #
# ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ #

# *********************************************************** Python Subheader #

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ #
```

```c
// =============================================================================
//                                  C Header                                    
// =============================================================================

// ------------------------------- C Subheader ---------------------------------

// -----------------------------------------------------------------------------
```

## Issues

Request features and report bugs using [GitHub](https://github.com/joey-john/comment-divider/issues).

### Known Issues
-