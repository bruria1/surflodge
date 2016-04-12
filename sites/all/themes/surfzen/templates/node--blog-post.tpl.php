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
    hide($content['field_post_date']);
    hide($content['field_background_image']);
  ?>
  <div class="date-in-parts">
    <div class="month"><?php echo date('F', strtotime($node->field_post_date['und'][0]['value']));?></div>
    <div class="day"><?php echo date('d', strtotime($node->field_post_date['und'][0]['value']));?></div>
  </div><!--//date-in-parts -->
  <div class="name-title"?>
    <?php print render($content['field_post_type']); ?>
    <h1 class="page__title title" id="page-title"><?php print $node->title; ?></h1>
  </div>
  <?php print render($content['field_post_tags']); ?>
  <?php print render($content['field_blog_post_image']); ?>
  <div id="share">
    <div class="twitter link">
        <a href="https://twitter.com/home?status=http://tikke.co.il/node/<?php print $node->nid ?>" onclick="javascript:window.open(this.href,
    '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><img
    src="/sites/all/themes/surfzen/images/twitter.png" alt="Share on Twitter"/></a>
    </div>
    <div class="facebook link">
        <a href="https://www.facebook.com/sharer/sharer.php?u=http://tikke.co.il/node/<?php print $node->nid ?>" onclick="javascript:window.open(this.href,
    '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><img
    src="/sites/all/themes/surfzen/images/facebook.png" alt="Share on Facebook"/></a>
    </div>
    <div class="pinterest link">
      <a href="https://www.pinterest.com/pin/create/button/" onclick="javascript:window.open(this.href,
    '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
          <img src="/sites/all/themes/surfzen/images/pinterest.png" />
      </a>
    </div>
  </div> 
  <?php print render($content);?>

  <?php print render($content['links']); ?>

  <?php print render($content['comments']); ?>
</div>
</article>
