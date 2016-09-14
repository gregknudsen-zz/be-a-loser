<?php function displayUpdate() {
  $json_data = file_get_contents("./updates.json");
  $json = json_decode($json_data, true);
  for ($i=0; $i < count($json['updates']); $i++) { 
    echo "<section>";
    echo "<p>";
    echo $json['updates'][$i]['date'];
    echo "</p>";
    echo "<h3>";
    echo $json['updates'][$i]['title'];
    echo "</h3>";
    echo "<p>";
    echo $json['updates'][$i]['summary'];
    echo "</p>";
    echo "<p>";
    echo $json['updates'][$i]['link-text']. " " . $json['updates'][$i]['link']. ".";
    echo "</p>";
    echo "</section>";
   }

  } 

?>



<div class="line">
  <div class="box margin-bottom">
     <div class="margin">
        <!-- Updates -->
        <article class="s-12 l-6">
           <h1>The Latest</h1>
           <div class="scrollable padding">
              <div id="update-content">              
                <?php displayUpdate(); ?>
                  
                <p>Check back for more updates!</p>
              </div>
           </div>
        </article>
      <!-- Social Media -->
      <div id="social-media" class="s-12 l-6">
         <a href="https://www.facebook.com/bealosertoday/?ref=aymt_homepage_panel" target="_blank"><img src="img/loser-facebook.jpg" alt=""></a>
         <a href="https://www.youtube.com/channel/UCR2z_y7rQO3CMb3sQe9a48Q" target="_blank"><img src="img/loser-youtube.jpg" alt=""></a>
      </div>

    </div>
  </div>
</div>
