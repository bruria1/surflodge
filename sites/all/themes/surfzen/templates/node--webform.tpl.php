<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>

<?php $url="http://" . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI']."/sites/default/files/".render($node->field_background_image['und'][0]['filename']);
 ?>

<div class="bg-image" style="background: url('<?php print $url; ?>') no-repeat center center"></div>

<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <div class="wrapper-article">
  <?php if ($title_prefix || $title_suffix || $display_submitted || $unpublished || !$page && $title): ?>
    <header>
      <?php print render($title_prefix); ?>
      <?php if (!$page && $title): ?>
        <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
      <?php endif; ?>
      <?php print render($title_suffix); ?>

      <?php if ($display_submitted): ?>
        <p class="submitted">
          <?php print $user_picture; ?>
          <?php print $submitted; ?>
        </p>
      <?php endif; ?>

      <?php if ($unpublished): ?>
        <mark class="unpublished"><?php print t('Unpublished'); ?></mark>
      <?php endif; ?>
    </header>
  <?php endif; ?>

  <?php

    // We hide the comments and links now so that we can render them later.
    hide($content['comments']);
    hide($content['links']);
    hide($content['field_background_image']); ?>
    <h1 class="page__title title" id="page-title"><?php print $node->title; ?></h1>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script type="text/javascript" src="/sites/all/themes/surfzen/js/map.js"></script>
    <div id="map-canvas"></div>
    <?php print render($content['body']);
  ?>

  <?php print render($content['links']); ?>

  <?php print render($content['comments']); ?>
</div>
</article>
<div class="form-wrapper-contact-us">
  <div class="form">
    <H2 class="form-title">get in touch</h2>
    <?php print render($content); ?>
  </div>
</div>
