<?php
/**
 * @file
 * Template for the weather module.
 */
?>
<div class="weather">
  <?php foreach($weather as $place): ?>
    <p class="place" style="clear:left">Montauk, NY</p>
    <?php if (empty($place['forecasts'])): ?>
      <?php print(t('Currently, there is no weather information available.')); ?>
    <?php endif ?>
    <?php foreach($place['forecasts'] as $forecast): ?>
      <?php foreach($forecast['time_ranges'] as $time_range => $data): ?>
        <p class="temperature fahrenheit">
          <?php print $data['temperature']; ?><span class="scales"><span class="fahrenheit active">F</span><span class="line"></span><span class="celsius">C</span></span>
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
