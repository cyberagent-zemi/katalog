package jp.co.cyberagent.katalog.compose.widget

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.requiredHeight
import androidx.compose.foundation.layout.requiredWidth
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import androidx.compose.ui.unit.dp
import jp.co.cyberagent.katalog.domain.ExtWrapperScopeImpl
import jp.co.cyberagent.katalog.domain.Extensions
import jp.co.cyberagent.katalog.ext.ExperimentalKatalogExtApi
import jp.co.cyberagent.katalog.ext.ExtComponentWrapper
import jp.co.cyberagent.katalog.ext.ExtNavState

@ExperimentalKatalogExtApi
@Composable
internal fun Preview(
    title: String,
    extensions: Extensions,
    extNavState: ExtNavState,
    modifier: Modifier = Modifier,
    scale: Float = 1.0F,
    clickable: Boolean = false,
    definition: @Composable () -> Unit
) {
    val componentWrappers = extensions.componentWrappers
    Surface(
        modifier = modifier,
        color = MaterialTheme.colors.background
    ) {
        ExtensionsWrappers(
            title = title,
            extNavState = extNavState,
            componentWrappers = componentWrappers
        ) {
            Scaler(scale) {
                definition()
                ClickMask(
                    modifier = Modifier.fillMaxSize(),
                    enabled = !clickable
                )
            }
        }
    }
}

@ExperimentalKatalogExtApi
@Composable
private fun ExtensionsWrappers(
    title: String,
    extNavState: ExtNavState,
    componentWrappers: List<ExtComponentWrapper>,
    content: @Composable () -> Unit
) {
    if (componentWrappers.isEmpty()) {
        content()
        return
    }
    ExtensionsWrappers(
        title = title,
        extNavState = extNavState,
        componentWrappers = componentWrappers.dropLast(1)
    ) {
        val target = componentWrappers.last()
        val scope = ExtWrapperScopeImpl(
            title = title,
            navState = extNavState
        )
        scope.target {
            content()
        }
    }
}

@Composable
private fun Scaler(
    scale: Float = 1.0F,
    content: @Composable () -> Unit
) {
    BoxWithConstraints {
        val size = 1.0F / scale
        val width = (this.maxWidth.value * size).dp
        val height = (this.maxHeight.value * size).dp
        Box(
            modifier = Modifier
                .requiredWidth(width)
                .requiredHeight(height)
                .scale(scale),
            contentAlignment = Alignment.Center
        ) {
            content()
        }
    }
}
