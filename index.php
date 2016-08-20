<html lang="en-US">
   <?php include "includes/head.php"; ?>
   <body class="size-960">
      <!-- HEADER -->
      <?php include "includes/header.php"; ?>
       
      <!-- TOP NAV -->  
      <?php include "includes/navigation.php"; ?>      
      <!-- <section> -->
         <!-- CAROUSEL -->  
      <?php include "includes/carousel.php"; ?>
         <!-- ABOUT -->      
      <?php include "includes/about.php"; ?>   
         <!-- UPDATES & LOGO -->
      <?php include "includes/updates.php"; ?>   
      <!-- FOOTER -->
      <p>
         <?php 
                  $json_data = file_get_contents("updates.json");
                  $json = json_decode($json_data, true);
                  $output = "hello!";
                  //echo $json['updates'][0]['title'];
                  foreach ($json['updates'] as $update) {
                    
                    $output += "<p>".$update['date']."</p>";
                    $output += "<h3>".$update['title']."</h3>";
                  }

                 ?>
      </p>
      <?php include "includes/footer.php"; ?>

      <script type="text/javascript" src="owl-carousel/owl.carousel.js"></script>  
      <script type="text/javascript" src="js/owl-custom.js"></script>  
      
   </body>
</html>
