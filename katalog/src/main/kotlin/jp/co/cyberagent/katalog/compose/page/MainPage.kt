package jp.co.cyberagent.katalog.compose.page

import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.runtime.Composable
import jp.co.cyberagent.katalog.compose.navigation.MainDestination
import jp.co.cyberagent.katalog.compose.navigation.NavAnimation
import jp.co.cyberagent.katalog.compose.navigation.NavController
import jp.co.cyberagent.katalog.compose.navigation.NavRoot
import jp.co.cyberagent.katalog.domain.CatalogItem
import jp.co.cyberagent.katalog.domain.Katalog
import jp.co.cyberagent.katalog.ext.ExperimentalKatalogExtApi
import jp.co.cyberagent.katalog.ext.ExtNavState

@ExperimentalKatalogExtApi
@OptIn(ExperimentalAnimationApi::class)
@Composable
internal fun MainPage(
    katalog: Katalog,
    navController: NavController<MainDestination>,
    extNavState: ExtNavState,
    onClickItem: (item: CatalogItem) -> Unit,
    onClickBack: () -> Unit
) {
    NavRoot(
        navController = navController,
        transitionSpec = NavAnimation.createUpSpec()
    ) { state ->
        when (state.destination) {
            is MainDestination.Discovery -> {
                DiscoveryPage(
                    katalog = katalog,
                    navController = state.destination.childNavController,
                    extNavState = extNavState,
                    onClickItem = onClickItem,
                    isTopPage = navController.isTop,
                    onClickBack = onClickBack
                )
            }
            is MainDestination.Preview -> {
                PreviewPage(
                    title = katalog.title,
                    component = state.destination.component,
                    extensions = katalog.extensions,
                    extNavState = extNavState,
                    onClickClose = onClickBack
                )
            }
        }
    }
}
