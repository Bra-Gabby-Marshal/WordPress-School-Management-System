<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'school_management_system' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'oG<!^Q/Xw-5,Iu#AP*PtjZp9*GvUM{82o&YuDK#u]$w4MzrbQU/C+x,F<:~_>S$_' );
define( 'SECURE_AUTH_KEY',  'o(Sn,`-pw}WVc~_UKsZ7O,peR6JiQHEb#BDp9=h.y{bD7eFz%*tN,ev=`vU6MDsi' );
define( 'LOGGED_IN_KEY',    '3iylH>WT27|3cww2@9b2&S?;L:|=!$FwTw6hQig]h#O(A{{Q#dItC(G+mtm>gady' );
define( 'NONCE_KEY',        'W(Qh$_NK@uD[D/VsBmkv;5ruSMf`BGVD=Ej|~w6kk5J=zkm`nF~t0Wicw/,_g*4!' );
define( 'AUTH_SALT',        'nd84e#?ZqK |%^s:UbgUjVk=)]/nOl*4! R`::]Kenn{Z5=!1@fz{>g>P-~/}ukH' );
define( 'SECURE_AUTH_SALT', 'g_-L((}Gk3gGhkyOIlBDLjDlyE[q7?@Sa3PiN!h_<gm)_O8n>X,dlEiHT_QN0($R' );
define( 'LOGGED_IN_SALT',   '1bJGolVI] #[0<^#.6yisg}oEiH4{0fo~11eVTtCeMER^m0-^of1Si3BjiD.aRHE' );
define( 'NONCE_SALT',       'PBH-O>9[6Jj%S3p1oe- &=[^-4NNhg~`D)FmP<,(NJ.o*5LFU$,xn=LtkSLARWpB' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
