<?php
/* Sort Array Descending */
usort($output, function($a, $b){
  return strtotime($b['date']) - strtotime($a['date']);
});

/* Sort Array Ascending */
usort($output, function($a, $b){
  return strtotime($a['date']) - strtotime($b['date']);
});


/* Bagi data 1-10 */
$listVideo  = array_slice($getVideo, 0, 10);

/*capctha*/
?>
