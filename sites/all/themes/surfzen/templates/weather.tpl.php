<?php
/**
 * @file
 * Template for the weather module.
 */
?>
<div class="weather">
  <?php foreach($weather as $place): ?>
    <p style="clear:left">Montauk, NY</p>
    <?php if (empty($place['forecasts'])): ?>
      <?php print(t('Currently, there is no weather information available.')); ?>
    <?php endif ?>
    <?php foreach($place['forecasts'] as $forecast): ?>
      <?php foreach($forecast['time_ranges'] as $time_range => $data): ?>
        <p class="temperature">
          <?php print $data['temperature']; ?>
          <?php if (isset($data['windchill'])): ?>
            <br />
            <?php print(t('Feels like !temperature', array('!temperature' => $data['windchill']))); ?>
          <?php endif ?>
        </p>
      <?php endforeach; ?>
    <?php endforeach; ?>
    <?php if (isset($place['station'])): ?>
      <p style="clear:left">
        <?php print t('Location of this weather station:'); ?><br />
        <?php print $place['station']; ?>
      </p>
    <?php endif ?>
  <?php endforeach; ?>
</div>
