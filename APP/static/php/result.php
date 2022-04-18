<html>
<body>

Játékosnév: <?php echo $_GET["jatekosnev"]; ?>
<br>
Nem: <?php header("Content-Type: text/plain");

foreach ($_GET['nem'] as $selectedOption)
    echo $selectedOption."\n"; ?>
<br>
Keresztnév: <?php echo $_GET["keresztnev"]; ?>
<br>
Kor: <?php echo $_GET["kor"]; ?>
<br>
Ország: <?php echo $_GET["orszag"]; ?>
<br>
Státusz: <?php header("Content-Type: text/plain");

foreach ($_GET['statusz'] as $selectedOption)
    echo $selectedOption."\n"; ?>
<br>
Mióta játszom a játékkal:
<br>
Melyek igazak rám: <?php
  $aDoor = $_POST['inp'];
  if(empty($aDoor)) 
  {
    echo("Egyik se.");
  } 
  else
  {
    $N = count($aDoor);

    echo("You selected $N door(s): ");
    for($i=0; $i < $N; $i++)
    {
      echo($aDoor[$i] . " ");
    }
  }
?>
<br>
Egyéb: <?php echo $_GET["egyeb"]; ?>

</body>
</html> 