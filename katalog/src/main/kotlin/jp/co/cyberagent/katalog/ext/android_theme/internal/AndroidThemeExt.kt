package jp.co.cyberagent.katalog.ext.android_theme.internal

import androidx.annotation.StyleRes
import jp.co.cyberagent.katalog.ext.KatalogExt

internal fun createAndroidThemeExt(
    @StyleRes themeResId: Int
): KatalogExt {
    val builder = KatalogExt.Builder("AndroidTheme")
    builder.setRootWrapper { content ->
        val themeSelected = rememberThemeSelected(themeResId)
        if (themeSelected) {
            content()
        }
    }
    builder.setComponentWrapper { content ->
        Background {
            content()
        }
    }
    return builder.build()
}