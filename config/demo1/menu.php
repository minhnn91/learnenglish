<?php

use App\Core\Adapters\Theme;

return array(
    // Refer to config/global/menu.php

    // Horizontal menu
    'horizontal' => array(
        array(
            'title'   => 'Bảng điều khiển',
            'path'    => '',
            'classes' => array('item' => 'me-lg-1'),
        ),

        array(
            'title'      => 'Từ vựng',
            'classes'    => array('item' => 'menu-lg-down-accordion me-lg-1', 'arrow' => 'd-lg-none'),
            'attributes' => array(
                'data-kt-menu-trigger'   => "click",
                'data-kt-menu-placement' => "bottom-start",
            ),
            'sub'        => array(
                'class' => 'menu-sub-lg-down-accordion menu-sub-lg-dropdown w-100 w-lg-600px p-5 p-lg-5',
                'view'  => 'layout/header/_mega-menu',
            ),
        ),
    ),
);
