
var startWork = 8;
var endWork = 19;

getCurrentDate();

function getCurrentDate () {
    var currentDate = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(currentDate);
};

timeBlock(startWork,endWork);

function timeBlock (init,end) {
    if (init<end) {
        for(var i = init; i <= end; i++){
            var div = $("<div>").addClass("col-2 hour").text(getHour(i));
            var text = $("<textArea>").addClass("col-8 description");
            var btn = $("<button>").addClass("col-2 btn saveBtn").append($("<span>").addClass("fas fa-save"));
            var container = $("<div>").addClass('row time-block').attr("id","hour"+i);
            $(".container").append(container.append([
                div,
                text,
                btn
            ]));;         
        }
    }
    else{console.log('arreglar la fecha')}
    
}

function getHour (time) {
    console.log('aqui de paso'+ time)
    return time<12
     ?time + ":00am"
     :time >12
     ?time -12 + ":00am"
     :time + ":00pm"
 }
 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    timeTracker();
    
    function timeTracker() {
        var timeNow = moment().hour();
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    for (i = startWork; i <endWork ; i++) { 
        $('#hour'+i.description).val(localStorage.getItem('hour' + i))
    }


