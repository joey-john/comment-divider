<p align="center">
  <img alt="Comment Divider" src="https://github.com/joey-john/comment-divider/raw/master/img/logo_256.png" width="20%"  />
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

- Default Shortcut:

  **`Shift`** + **`Alt`** + **`X`**

- Default Style:

  ```
  /* -------------------------------------------------------------------------- */
  /*                                Example text                                */
  /* -------------------------------------------------------------------------- */
  ```

### Make subheader

- Default Shortcut:

  **`Alt`** + **`X`**

- Default Style:

  ```
  /* ------------------------------ Example text ------------------------------ */
  ```

### Insert solid line

- Default Shortcut:

  **`Alt`** + **`Y`**

* Default Style:

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
  // Set line length for all dividers.
  "comment-divider.length": 80,
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
  // "Set symbol for main header line filling (only one).
  "comment-divider.mainHeaderFiller": "-",

  // Set main header vertical style.
  "comment-divider.mainHeaderHeight": "block",

  // Set main header text align.
  "comment-divider.mainHeaderAlign": "center",

  // Set main header text transform style.
  "comment-divider.mainHeaderTransform": "none",
```

### Subheader

```json
  // "Set symbol for subheader line filling (only one).
  "comment-divider.subheaderFiller": "-",

  // Set subheader vertical style.
  "comment-divider.subheaderHeight": "line",

  // Set subheader text align.
  "comment-divider.subheaderAlign": "center",

  // Set subheader text transform style.
  "comment-divider.subheaderTransform": "none",
```

### Solid Line

```json
  // Set symbol for solid line filling.
  "comment-divider.lineFiller": "-",
```

## Languages Configuration

If some language is not supported out of the box, or you want to change the default characters for an already supported language, it is possible to do it in the settings.

```json
"comment-divider.languagesMap": {
      "python": {
        "solidLineSym": "-",
        "wordLineSym": "-",
        "blockSym": "+",
        "limiters": ["#", "#"],
      },
      "c": {
        "limiters": ["//"]
      }
}
```

The item name is the language mode name and is associated with an object with the following fields:
  - `solidLineSym`: (optional) Solid Line Filler Character
  - `wordLineSym`: (optional) Word Line Filler Character
  - `blockSym`: (optional) Block Header Filler Character
  - `limiters`: (required) Comment Symbols. The first element is the start of the line. The second, 
                if defined, is the end. 

For any symbol not defined, the corresponding default filler symbol defined in the settings will be used. 

The example above overrides `python` and `c` defaults. As a result, the subheaders for these languages look like this:

```python
# ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ #
#                                 Python Header                                #
# ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ #

# ----------------------------- Python Subheader ----------------------------- #

# ---------------------------------------------------------------------------- #
```

```c
// -----------------------------------------------------------------------------
//                                  C Header                                    
// -----------------------------------------------------------------------------

// ------------------------------- C Subheader ---------------------------------

// -----------------------------------------------------------------------------
```

## Issues

Request features and report bugs using [GitHub](https://github.com/joey-john/comment-divider/issues).

### Known Issues
- After changing a symbol, `Developer: Reload Window` must be called in order to have the change take effect