
<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>
<?php $url="http://" . $_SERVER['SERVER_NAME'] ."/sites/default/files/".render($node->field_background_image['und'][0]['filename']);
 ?>

<div class="bg-image" style="background: url('<?php print $url; ?>') no-repeat top center"></div>

<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <div class="wrapper-article">
<h1 class="page__title title" id="page-title"><?php print $node->title; ?></h1>

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
    hide($content['field_background_image']);
    print render($content);
  ?>
  
  <?php drupal_add_library('system', 'ui.datepicker'); ?>
  
  <form class="room-form" action="https://secure.iqres06931.com/iqreservations/default.asp" method="GET" name="Res_Form" target="_blank">
    <div class="form-widget">
          <div class="res_form">
            <label>Check in:</label>
            <input name="arrivalDate" type="text" id="date-from" class="resbox" 
              value="<?php print date("m/d/Y");?>" readonly="true" 
              <?php //onclick="if (this.value=='' || this.value==' ' || this.value=='   ') this.value='ARRIVAL DATE'" ?>
              size="10">
          </div> 
          <div class="res_form">
            <label>Check out:</label>
            <input class="resbox" name="departureDate" id="date-to" type="text" 
              value="<?php print date("m/d/Y", time()+86400); ?>" readonly="true" 
              <?php //onclick="if (this.value=='' || this.value==' ' || this.value=='   ') this.value='DEPARTURE DATE'" ?>
              size="10">
          </div> 
          <div class="res_form_label res_form"> 
            <label>Adults:</label>
            <div class="styled-select">
              <select name="AD"> <!-- AD = Adults-->  
                <option value="1">1</option>
                <option value="2" selected="selected">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>            
              </select>
            </div>
          </div>  
          <div class="res_form_label res_form">
          <label>Children:</label>
          <div class="styled-select"><select name="CH"> <!-- CH = Children-->  
    <option value="0" selected="selected">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select></div></div>

     <input type="hidden" name="CIM" id="CIM" value="06">
     <input type="hidden" name="CID" id="CID" value="01">
     <input type="hidden" name="CIY" id="CIY" value="2016">
     <input type="hidden" name="COM" id="COM" value="06">
     <input type="hidden" name="COD" id="COD" value="04">
     <input type="hidden" name="COY" id="COY" value="2016">
    </div>
      <div class="submit">
          <input type="submit" name="action" value="Check Availability" id="availability">
        </div>
          </form>
          <script type="text/javascript">
          (function($) {
            $(document).ready(function() {
              $('#date-from').datepicker();
              $('#date-to').datepicker();
            });
          })(jQuery);
          </script>

  <?php print render($content['links']); ?>

  <?php print render($content['comments']); ?>
</div>
</article>
