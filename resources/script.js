
$(document).ready(function(){
    $("#iPhone1").click(function() { /*when first iPhone is clicked, the second iPhone and set of instructions slides up and becomes visible */
        $("#iPhone1").slideUp("slow",function(){
            $("#iPhone1").css('none','block');
            $("#iPhone2").css('display','block');
        });
    });

    $("#iPhone2").click(function() { /*when second iPhone is clicked, the third iPhone and set of instructions slides up and becomes visible */
        $("#iPhone2").slideUp("slow",function(){
            $("#iPhone2").css('none','block');
            $("#iPhone3").css('display','block');
        });
    });

    $("#iPhone3").click(function() { /*when third iPhone is clicked, the fourth iPhone and set of instructions slides up and becomes visible */
        $("#iPhone3").slideUp("slow",function(){
            $("#iPhone3").css('none','block');
            $("#iPhone4").css('display','block');
        });
    });

    $("#iPhone4").click(function() { /*when fourth iPhone is clicked, the fifth iPhone and set of instructions slides up and becomes visible */
        $("#iPhone4").slideUp("slow",function(){
            $("#iPhone4").css('none','block');
            $("#iPhone5").css('display','block');
        });
    });

    $("#iPhone5").click(function() { /*when fifth iPhone is clicked, the 1st iPhone and set of instructions slides up and becomes visible */
        $("#iPhone5").slideUp("slow",function(){
            $("#iPhone5").css('none','block');
            $("#iPhone1").css('display','block');
        });
    });

    $("#lol").click(function(){ /*when user clicks on the "LOL" circle, color changes and the definition is given*/
        $("#lol").css('background','#B1CEB2');
        $("#lol").text('Laugh out loud');
    });

    $("#idk").click(function(){ /*when user clicks on the "IDK" circle, color changes and the definition is given*/
        $("#idk").css('background','#B1CEB2');
        $("#idk").text("I don't know");
    });

    $("#ily").click(function(){ /*when user clicks on the "ILY" circle, color changes and the definition is given*/
        $("#ily").css('background','#B1CEB2');
        $("#ily").text('I love you');
    });

    $("#fyi").click(function(){ /*when user clicks on the "FYI" circle, color changes and the definition is given*/
        $("#fyi").css('background','#B1CEB2');
        $("#fyi").text('For your information');
    });

    $("#omg").click(function(){ /*when user clicks on the "OMG" circle, color changes and the definition is given*/
        $("#omg").css('background','#B1CEB2');
        $("#omg").text('Oh my God');
    });

    $("#btw").click(function(){ /*when user clicks on the "BTW" circle, color changes and the definition is given*/
        $("#btw").css('background','#B1CEB2');
        $("#btw").text('By the way');
    });

    $("#np").click(function(){ /*when user clicks on the "NP" circle, color changes and the definition is given*/
        $("#np").css('background','#B1CEB2');
        $("#np").text('No problem');
    });

    $("#idc").click(function(){ /*when user clicks on the "IDC" circle, color changes and the definition is given*/
        $("#idc").css('background','#B1CEB2');
        $("#idc").text("I don't care");
    });

    $("#smh").click(function(){ /*when user clicks on the "SMH" circle, color changes and the definition is given*/
        $("#smh").css('background','#B1CEB2');
        $("#smh").text('Shaking my head');
    });

    $('#happy').click(function(){ /*allow user to toggle between showing/hiding happy emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#happy-emoji').css('display','none'); //show happy emojis
        $(this).removeClass('clicked')
    }
    else
    {
        $('#happy-emoji').css('display','block'); //hide happy emojis
        $(this).addClass('clicked')
    }
    });

    $('#love').click(function(){ /*allow user to toggle between showing/hiding love emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#love-emoji').css('display','none'); //show love emojis
        $(this).removeClass('clicked')
    }
    else
    {
        $('#love-emoji').css('display','block'); //hide love emojis
        $(this).addClass('clicked')
    }
    });

    $('#sad').click(function(){ /*allow user to toggle between showing/hiding sad emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#sad-emoji').css('display','none'); //show sad emojis
        $(this).removeClass('clicked')
    }
    else
    {
        $('#sad-emoji').css('display','block'); //hide sad emojis
        $(this).addClass('clicked')
    }
    });

    $('#angry').click(function(){ /*allow user to toggle between showing/hiding angry emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#angry-emoji').css('display','none'); //show angry emojis
        $(this).removeClass('clicked')
    }
    else
    {
        $('#angry-emoji').css('display','block'); //hide angry emojis
        $(this).addClass('clicked')
    }
    });

    $('#scared').click(function(){ /*allow user to toggle between showing/hiding scared emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#scared-emoji').css('display','none'); //show scared emojis
        $(this).removeClass('clicked')
    }
    else
    {
        $('#scared-emoji').css('display','block'); //hide scared emojis
        $(this).addClass('clicked')
    }
    });

    $('#surprised').click(function(){ /*allow user to toggle between showing/hiding surprised emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#surprised-emoji').css('display','none'); //show surprised emojis
        $(this).removeClass('clicked')
    }
    else
    {
        $('#surprised-emoji').css('display','block'); //hide surprised emojis
        $(this).addClass('clicked')
    }
    });

    $('#awkward').click(function(){ /*allow user to toggle between showing/hiding awkward emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#awkward-emoji').css('display','none'); //show awkward emojis
        $(this).removeClass('clicked')
    }
    else
    {
        $('#awkward-emoji').css('display','block'); //hide awkward emojis
        $(this).addClass('clicked')
    }
    });

    $('#funny').click(function(){ /*allow user to toggle between showing/hiding funny emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#funny-emoji').css('display','none'); //show funny emojis
        $(this).removeClass('clicked')
    }
    else
    {
        $('#funny-emoji').css('display','block'); //hide funny emojis
        $(this).addClass('clicked')
    }
    });

    $('#over-it').click(function(){ /*allow user to toggle between showing/hiding over it emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#over-it-emoji').css('display','none'); //show over it emojis
        $(this).removeClass('clicked')
    }
    else
    {
        $('#over-it-emoji').css('display','block'); //hide over it emojis
        $(this).addClass('clicked')
    }
    });

    $('#suggestive').click(function(){ /*allow user to toggle between showing/hiding suggestive emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#suggestive-emoji').css('display','none'); //show suggestive emojis
        $(this).removeClass('clicked')
    }
    else
    {
        $('#suggestive-emoji').css('display','block'); //hide suggestive emojis
        $(this).addClass('clicked')
    }
    });
});

