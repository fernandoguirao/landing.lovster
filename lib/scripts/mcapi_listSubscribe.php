<?php

require_once 'MCAPI.class.php';
require_once 'config.inc.php';

$api = new MCAPI($apikey);

$merge_vars = array('FNAME'=>$_GET['MERGE1'], 'MMERGE3'=>$_GET['MERGE3'], 'MMERGE4'=>$_GET['MERGE4']);

$retval = $api->listSubscribe( $listId, $_GET['MERGE2'], $merge_vars,'html', false,true,true,true );

if ($api->errorCode){
  header( 'Location: http://lovster.co/?register=fail' ) ;
} else {
    header( 'Location: http://lovster.co/?register=success' ) ;
}

?>