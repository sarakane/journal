import { Entry } from './entry';

$(document).ready(function() {
  $("form#journal-form").submit(function(event) {
    event.preventDefault();
    const titleInput = $("#title").val();
    const bodyInput = $("#body").val();

    let entry = new Entry(titleInput, bodyInput);

    $("#wordCount").text(entry.numberOfWords());
  });
});