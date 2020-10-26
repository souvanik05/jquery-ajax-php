$(document).ready(function () {
    $('#add_tweet').on('click',function() {
        const tweet_val = $('#tweet').val();
        if (tweet_val.trim() !== '') {
          $.ajax({
              type: "POST",
              url: "insert.php",
              data: {tweet: tweet},
              dataType: "text",
              success: function (response) {
                  alert(response);
              }
          });
           
        }
    })
});