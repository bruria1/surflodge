<?php if ($page): ?>
<?php drupal_add_library('system', 'ui.datepicker'); ?>
<input type="text" class="picker" />
<script type="text/javascript">
  (function($){
    $(document).ready(function() {
      $('.picker').datepicker();
    });
  })(jQuery);
</script>
<?php endif; ?>

  	<?php
          drupal_add_library('system', 'ui.datepicker');
	?>
	
	<form action="https://secure.iqres06931.com/iqreservations/default.asp" method="GET" name="Res_Form" target="_blank">
          <div class="res_form">
            <input name="arrivalDate" type="text" id="date-from" class="resbox hasDatepicker" 
              value="06/01/2016" readonly="true" 
              <?php //onclick="if (this.value=='' || this.value==' ' || this.value=='   ') this.value='ARRIVAL DATE'" ?>
              size="10">
            <img class="ui-datepicker-trigger" 
              src="http://thesurflodge.com/wp-content/themes/quark/images/calendar.png" 
              alt="..." title="...">
          </div> 

          <div class="res_form">
            <input class="picker" name="departureDate" id="date-to" type="text" 
              value="06/04/2016" readonly="true" 
              <?php //onclick="if (this.value=='' || this.value==' ' || this.value=='   ') this.value='DEPARTURE DATE'" ?>
              size="10">
            <img class="ui-datepicker-trigger" 
              src="http://thesurflodge.com/wp-content/themes/quark/images/calendar.png" 
              alt="..." title="...">
          </div> 
          <div class="res_form_label"> 
            Adults:&nbsp; 
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
          <div class="res_form_label">Children:&nbsp;<div class="styled-select"><select name="CH"> <!-- CH = Children-->  
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
  
          <input type="submit" name="action" value="Check Availability" id="availability">
          </form>
          <script type="text/javascript">
          (function($) {
            $(document).ready(function() {
              $('#date-from').datepicker();
              //$('#date-to').datepicker();
            });
          })(jQuery);
          </script>
