// Let's make Trump a little more accountable for his Tweets.

// Append the button to the action bar.
$('[data-screen-name~="realDonaldTrump"]').find(".ProfileTweet-actionList")
  .append(`
    <div class="ProfileTweet-action ProfileTweet-action--search">
      <a target="_blank" class="ProfileTweet-actionButton u-textUserColorHover js-actionButton js-actionShareViasearch validator" type="button" data-nav="share_tweet_search" href="http://google.com">
        <div class="IconContainer js-tooltip" data-original-title="Search the authenticity of this tweet.">
          <span class="Icon Icon--medium Icon--search"></span>
          <span class="u-hiddenVisually">Search</span>
        </div>
        <span class="ProfileTweet-actionCount">
          <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">
            Validate Tweet
          </span>
        </span>
      </a>
    </div>`);

// Add the stripes.
$('[data-screen-name~="realDonaldTrump"]')
  .closest(".tweet")
  .css({ "background-color": "white", margin: "5px" })
  .closest("li")
  .addClass("liar-stripes");

// Update the link
$('[data-screen-name~="realDonaldTrump"]').each(function() {
  let data = $(this).data();
  const tweetText = $(this)
    .find(".js-tweet-text-container")
    .text()
    .replace(/(\r\n\t|\n|\r\t)/gm, "")
    .trim();
  $(this)
    .find(".validator")
    .attr(
      "href",
      `http://www.google.com/search?q=${encodeURI(tweetText)}&ie=utf-8&oe=utf-8`
    );
});

// TODO: Add better search params.

// https://chrome.google.com/webstore/detail/trump-tweet-investigator/ffhfdefmgojojcligjcomiaebeenmojf

// Decoded

// q: pass date into google search
// rlz: 1C5CHFA_enUS685US685
// tbs: cdr:1,cd_min:7/29/2018,cd_max:7/31/2018
// source: lnms
// tbm: nws
// sa: X
// ved: 0ahUKEwit2qGfutbcAhWIEXwKHehBB0gQ_AUICygC
// biw: 3008
// bih: 1573

// Source

// q: pass+date+into+google+search
// rlz: 1C5CHFA_enUS685US685
// tbs: cdr:1,cd_min:7/29/2018,cd_max:7/31/2018
// source: lnms
// tbm: nws
// sa: X
// ved: 0ahUKEwit2qGfutbcAhWIEXwKHehBB0gQ_AUICygC
// biw: 3008
// bih: 1573
