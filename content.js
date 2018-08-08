// Let's make Trump a little more accountable for his Tweets.

function truncate(str, no_words) {
  return str
    .split(" ")
    .splice(0, no_words)
    .join(" ");
}

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
  const timeStamp = $(this)
    .find(".tweet-timestamp span")
    .data("time");
  const yesterday = moment(timeStamp * 1000)
    .utc()
    .subtract(1, "days")
    .format("L");
  const tomorrow = moment(timeStamp * 1000)
    .utc()
    .add(1, "days")
    .format("L");
  $(this)
    .find(".validator")
    .attr(
      "href",
      `http://www.google.com/search?q=${encodeURI(truncate(tweetText, 32))}
      &tbs=cdr:1,cd_min:${yesterday},cd_max:${tomorrow}
      &ie=utf-8
      &oe=utf-8
      &tbm=nws`
    );
});
