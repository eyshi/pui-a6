function setup () {
    createCanvas(1360,100);
    background(120, 92, 106);
}

function draw () {/*creates footer*/
    colorMode(RGB);
    noStroke();
    background(255);

    A = color(184, 204, 178);
    D = color(120, 92, 106);

    B = lerpColor(A, D, .33);
    C = lerpColor(A, D, .66);

    fill(A);
    rect(10, 20, 340, 100);
    fill(B);
    rect(350, 20, 680, 100);
    fill(C);
    rect(690, 20, 1020, 100);
    fill(D);
    rect(1030, 20, 1360, 100);
}

$(document).ready(function(){
    $("#iPhone1").click(function() { /*when first iPhone is clicked, the second iPhone and set of instructions slides up and becomes visible */
        $("#iPhone1").slideUp("slow",function(){
            $("#iPhone1").css('none','block');
            $("#iPhone2").css('display','block');
            $("#paper").trigger('play');/*paper flip sound (every time user clicks)*/
        });
    });

    $("#iPhone2").click(function() { /*when second iPhone is clicked, the third iPhone and set of instructions slides up and becomes visible */
        $("#iPhone2").slideUp("slow",function(){
            $("#iPhone2").css('none','block');
            $("#iPhone3").css('display','block');
            $("#paper").trigger('play');/*paper flip sound (every time user clicks)*/
        });
    });

    $("#iPhone3").click(function() { /*when third iPhone is clicked, the fourth iPhone and set of instructions slides up and becomes visible */
        $("#iPhone3").slideUp("slow",function(){
            $("#iPhone3").css('none','block');
            $("#iPhone4").css('display','block');
            $("#paper").trigger('play');/*paper flip sound (every time user clicks)*/
        });
    });

    $("#iPhone4").click(function() { /*when fourth iPhone is clicked, the fifth iPhone and set of instructions slides up and becomes visible */
        $("#iPhone4").slideUp("slow",function(){
            $("#iPhone4").css('none','block');
            $("#iPhone5").css('display','block');
            $("#paper").trigger('play');/*paper flip sound (every time user clicks)*/
        });
    });

    $("#iPhone5").click(function() { /*when fifth iPhone is clicked, the 1st iPhone and set of instructions slides up and becomes visible */
        $("#iPhone5").slideUp("slow",function(){
            $("#iPhone5").css('none','block');
            $("#iPhone1").css('display','block');
            $("#paper").trigger('play');/*paper flip sound (every time user clicks)*/
        });
    });

    $("#lol").click(function(){ /*when user clicks on the "LOL" circle, color changes and the definition is given*/
        $("#lol").css('background','#B1CEB2');
        $("#lol").text('Laugh out loud');
        $("#click").trigger('play');/*play click sound when user clicks on a circle*/
    });

    $("#idk").click(function(){ /*when user clicks on the "IDK" circle, color changes and the definition is given*/
        $("#idk").css('background','#B1CEB2');
        $("#idk").text("I don't know");
        $("#click").trigger('play');/*play click sound when user clicks on a circle*/
    });

    $("#ily").click(function(){ /*when user clicks on the "ILY" circle, color changes and the definition is given*/
        $("#ily").css('background','#B1CEB2');
        $("#ily").text('I love you');
        $("#click").trigger('play');/*play click sound when user clicks on a circle*/
    });

    $("#fyi").click(function(){ /*when user clicks on the "FYI" circle, color changes and the definition is given*/
        $("#fyi").css('background','#B1CEB2');
        $("#fyi").text('For your information');
        $("#click").trigger('play');/*play click sound when user clicks on a circle*/
    });

    $("#omg").click(function(){ /*when user clicks on the "OMG" circle, color changes and the definition is given*/
        $("#omg").css('background','#B1CEB2');
        $("#omg").text('Oh my God');
        $("#click").trigger('play');/*play click sound when user clicks on a circle*/
    });

    $("#btw").click(function(){ /*when user clicks on the "BTW" circle, color changes and the definition is given*/
        $("#btw").css('background','#B1CEB2');
        $("#btw").text('By the way');
        $("#click").trigger('play');/*play click sound when user clicks on a circle*/
    });

    $("#np").click(function(){ /*when user clicks on the "NP" circle, color changes and the definition is given*/
        $("#np").css('background','#B1CEB2');
        $("#np").text('No problem');
        $("#click").trigger('play');/*play click sound when user clicks on a circle*/
    });

    $("#idc").click(function(){ /*when user clicks on the "IDC" circle, color changes and the definition is given*/
        $("#idc").css('background','#B1CEB2');
        $("#idc").text("I don't care");
        $("#click").trigger('play');/*play click sound when user clicks on a circle*/
    });

    $("#smh").click(function(){ /*when user clicks on the "SMH" circle, color changes and the definition is given*/
        $("#smh").css('background','#B1CEB2');
        $("#smh").text('Shaking my head');
        $("#click").trigger('play');/*play click sound when user clicks on a circle*/
    });

    $('#happy').click(function(){ /*allow user to toggle between showing/hiding happy emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#happy-emoji').css('display','none'); //hide happy emojis
        $("#kick").trigger('play');/*play kick sound when user clicks on a circle again*/
        $(this).removeClass('clicked')
    }
    else
    {
        $('#happy-emoji').css('display','block'); //show happy emojis
        $("#tap").trigger('play');/*play tap sound when user first clicks on button*/
        $(this).addClass('clicked')
    }
    });

    $('#love').click(function(){ /*allow user to toggle between showing/hiding love emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#love-emoji').css('display','none'); //hide love emojis
        $("#kick").trigger('play');/*play kick sound when user clicks on a circle again*/
        $(this).removeClass('clicked')
    }
    else
    {
        $('#love-emoji').css('display','block'); //show love emojis
        $(this).addClass('clicked')
        $("#tap").trigger('play');/*play tap sound when user first clicks on button*/
    }
    });

    $('#sad').click(function(){ /*allow user to toggle between showing/hiding sad emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#sad-emoji').css('display','none'); //hide sad emojis
        $("#kick").trigger('play');/*play kick sound when user clicks on a circle again*/
        $(this).removeClass('clicked')
    }
    else
    {
        $('#sad-emoji').css('display','block'); //show sad emojis
        $("#tap").trigger('play');/*play tap sound when user first clicks on button*/
        $(this).addClass('clicked')
    }
    });

    $('#angry').click(function(){ /*allow user to toggle between showing/hiding angry emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#angry-emoji').css('display','none'); //hide angry emojis
        $("#kick").trigger('play');/*play kick sound when user clicks on a circle again*/
        $(this).removeClass('clicked')
    }
    else
    {
        $('#angry-emoji').css('display','block'); //show angry emojis
        $("#tap").trigger('play');/*play tap sound when user first clicks on button*/
        $(this).addClass('clicked')
    }
    });

    $('#scared').click(function(){ /*allow user to toggle between showing/hiding scared emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#scared-emoji').css('display','none'); //hide scared emojis
        $("#kick").trigger('play');/*play kick sound when user clicks on a circle again*/
        $(this).removeClass('clicked')
    }
    else
    {
        $('#scared-emoji').css('display','block'); //show scared emojis
        $("#tap").trigger('play');/*play tap sound when user first clicks on button*/
        $(this).addClass('clicked')
    }
    });

    $('#surprised').click(function(){ /*allow user to toggle between showing/hiding surprised emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#surprised-emoji').css('display','none'); //hide surprised emojis
        $("#kick").trigger('play');/*play kick sound when user clicks on a circle again*/
        $(this).removeClass('clicked')
    }
    else
    {
        $('#surprised-emoji').css('display','block'); //show surprised emojis
        $("#tap").trigger('play');/*play tap sound when user first clicks on button*/
        $(this).addClass('clicked')
    }
    });

    $('#awkward').click(function(){ /*allow user to toggle between showing/hiding awkward emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#awkward-emoji').css('display','none'); //hide awkward emojis
        $("#kick").trigger('play');/*play kick sound when user clicks on a circle again*/
        $(this).removeClass('clicked')
    }
    else
    {
        $('#awkward-emoji').css('display','block'); //show awkward emojis
        $("#tap").trigger('play');/*play tap sound when user first clicks on button*/
        $(this).addClass('clicked')
    }
    });

    $('#funny').click(function(){ /*allow user to toggle between showing/hiding funny emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#funny-emoji').css('display','none'); //hide funny emojis
        $("#kick").trigger('play');/*play kick sound when user clicks on a circle again*/
        $(this).removeClass('clicked')
    }
    else
    {
        $('#funny-emoji').css('display','block'); //show funny emojis
        $("#tap").trigger('play');/*play tap sound when user first clicks on button*/
        $(this).addClass('clicked')
    }
    });

    $('#over-it').click(function(){ /*allow user to toggle between showing/hiding over it emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#over-it-emoji').css('display','none'); //hide over it emojis
        $("#kick").trigger('play');/*play kick sound when user clicks on a circle again*/
        $(this).removeClass('clicked')
    }
    else
    {
        $('#over-it-emoji').css('display','block'); //show over it emojis
        $("#tap").trigger('play');/*play tap sound when user first clicks on button*/
        $(this).addClass('clicked')
    }
    });

    $('#suggestive').click(function(){ /*allow user to toggle between showing/hiding suggestive emojis*/
    if($(this).hasClass('clicked'))
    {
        $('#suggestive-emoji').css('display','none'); //hide suggestive emojis
        $("#kick").trigger('play');/*play kick sound when user clicks on a circle again*/
        $(this).removeClass('clicked')
    }
    else
    {
        $('#suggestive-emoji').css('display','block'); //show suggestive emojis
        $("#tap").trigger('play');/*play tap sound when user first clicks on button*/
        $(this).addClass('clicked')
    }
    });
});

