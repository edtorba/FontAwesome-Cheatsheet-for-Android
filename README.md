Font Awesome Cheatsheet for Android
==================================

The complete Font Awesome 4.3.0 icon reference for Android.

**How to use:**
- Upload `fontawesome.xml` to `res/values` folder.
- Set text on any of your element: `<button android:id="@+id/FOO" ... android:text="@string/fa_glass" ... />`
- Load `.ttf` font and set typeface

**How to set typeface:**
- Upload fontawesome `.ttf` font file to assets folder

```
Typeface font = Typeface.createFromAsset( getAssets(), "fontawesome-webfont.ttf" );
...
Button button = (Button)findViewById( R.id.FOO );
button.setTypeface(font);
```

**OR**

Better font loading techniques for android [here](https://code.google.com/p/android/issues/detail?id=9904#c7)

**How to update:**
When a new Font Awesome version is released, follow the steps below:

1. Install [Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
2. Navigate to this repository's directory and execute `npm install js-yaml`
3. Download the latest [icons.yaml](https://github.com/FortAwesome/Font-Awesome/blob/master/src/icons.yml) file into the repository's directory
4. Execute `node generate.js`
5. That's it! :+1: The `fontawesome.xml` file will now be up-to-date

[Font Awesome](http://fontawesome.io/) or [Font Awesome on GitHub](https://github.com/FortAwesome/Font-Awesome)

Thanks to [@sergiopantoja](https://github.com/sergiopantoja) for updating to 4.3.0 version.
