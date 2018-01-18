var roundCounter = ["One", "Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"];
var counter = 0;
var i = 0;
var x;
var y;
var z;
var total = 0;
var spare;
var strike;
var bonus1;
var bonus2;
var totalBonus = 0;
var j = 0;
var x2;
var y2;
var z2;
var total2 = 0;
var spare2;
var strike2;
var bonus12;
var bonus22;
var totalBonus2 = 0;
var roundCount;

function play(){

	document.getElementById("warning").style.display = "block";

	roundCount = setInterval(function(){ roundChange() }, 9000);

	function roundChange(){
		
		document.getElementById("warning").style.display = "none";
		document.getElementsByClassName("round")[0].innerHTML = "Round " + roundCounter[counter];
		document.getElementsByClassName("round")[1].innerHTML = "Round " + roundCounter[counter];

		setTimeout(function(){
			document.getElementById("one").style.color = "#7757c7";
			document.getElementById("two").style.color = "#9b9da0";
		}, 1000);

		var pointsArr = [0,1,2,3,4,5,6,7,9,10];
		var first = document.getElementsByClassName("firstTrow");
		var second = document.getElementsByClassName("secondTrow");
		var main = document.getElementsByClassName("mainScore");

		setTimeout(function checkTrowOne(){
			
			var point = Math.floor(Math.random() * (pointsArr.length));
			x = pointsArr[point];
			if(x == 10){
				first[i].innerHTML = "X";
				document.getElementById("playerOneText").innerHTML = "Strike!";
				if(strike == 1){

					if(spare == 1){
						total = total;
					}
					else{
						total = total + x;
					}
					
					main[i - 1].innerHTML = total;
					strike = 0;
					document.getElementById("playerOneText").innerHTML = " ";
				}
				strike = 1;
			}
			else{
				first[i].innerHTML = pointsArr[point];
			}

			if(spare == 1){
				total = total + x;
				main[i - 1].innerHTML = total;
			}
		},2000);
		setTimeout(function checkTrowTwo(){
			if(x == 10){
				y = 0;
			}
			else{
				var point = Math.floor(Math.random() * (pointsArr.length));
				y = pointsArr[point];
				var n = x + y;
				if(n == 10){
					second[i].innerHTML = "/";
					document.getElementById("playerOneText").innerHTML = "Spare!";
					spare = 1;
				}
				else if (n > 10){
					spare = 0;
					checkTrowTwo();
				}
				else{
					second[i].innerHTML = pointsArr[point];
					spare = 0;
					document.getElementById("playerOneText").innerHTML = " ";
				}

				if(strike == 1){
					total = total + n;
					main[i - 1].innerHTML = total;
					strike = 0;
					document.getElementById("playerOneText").innerHTML = " ";
				}
			}

		},3000);
		setTimeout(function(){
			z = x + y;
			main[i].innerHTML = z + total;
			total = total + z;
			i++;

			if(counter >= roundCounter.length){
				if(strike == 1){
					document.getElementById("playerOneText").innerHTML = " ";
					document.getElementsByClassName("bonus")[0].style.display = "flex";
					var point = Math.floor(Math.random() * (pointsArr.length));
					bonus1 = pointsArr[point];
						if(bonus1 == 10){
							totalBonus = total + bonus1;
							document.getElementsByClassName("bonusfirstTrow")[0].innerHTML = bonus1;
							document.getElementsByClassName("bonusmainScore")[0].innerHTML = totalBonus;
						}
						else{
							checkBonus();
							function checkBonus(){
								var point = Math.floor(Math.random() * (pointsArr.length));
								bonus2 = pointsArr[point];
								var k = bonus2 + bonus1;
								if(k > 10){
									checkBonus();
								}
								totalBonus = total + k;
								document.getElementsByClassName("bonusfirstTrow")[0].innerHTML = bonus1;
								document.getElementsByClassName("bonussecondTrow")[0].innerHTML = bonus2;
								document.getElementsByClassName("bonusmainScore")[0].innerHTML = totalBonus;
							}
						}
				}
				else if(spare == 1){
					document.getElementById("playerOneText").innerHTML = " ";
					document.getElementsByClassName("bonus")[0].style.display = "flex";
					var point = Math.floor(Math.random() * (pointsArr.length));
					bonus1 = pointsArr[point];
					totalBonus = total + bonus1;
					document.getElementsByClassName("bonusfirstTrow")[0].innerHTML = bonus1;
					document.getElementsByClassName("bonusmainScore")[0].innerHTML = totalBonus;
				}
			}
		},4000);

		setTimeout(function(){
			document.getElementById("one").style.color = "#9b9da0";
			document.getElementById("two").style.color = "#7757c7";
		}, 5000);

		// funkcija za poene
		var pointsArr2 = [0,1,2,3,4,5,6,7,9,10];
		var first2 = document.getElementsByClassName("firstTrow2");
		var second2 = document.getElementsByClassName("secondTrow2");
		var main2 = document.getElementsByClassName("mainScore2");

		setTimeout(function checkTrowOne2(){
			
			var point2 = Math.floor(Math.random() * (pointsArr2.length));
			x2 = pointsArr2[point2];
			if(x2 == 10){
				first2[j].innerHTML = "X";
				document.getElementById("playerTwoText").innerHTML = "Strike!";
				if(strike2 == 1){

					if(spare2 == 1){
						total2 = total2;
					}
					else{
						total2 = total2 + x2;
					}
					
					main2[j - 1].innerHTML = total2;
					strike2 = 0;
					document.getElementById("playerTwoText").innerHTML = " ";
				}
				strike2 = 1;
			}
			else{
				first2[j].innerHTML = pointsArr2[point2];
			}

			if(spare2 == 1){
				total2 = total2 + x2;
				main2[j - 1].innerHTML = total2;
			}
		},6000);
		setTimeout(function checkTrowTwo2(){
			if(x2 == 10){
				y2 = 0;
			}
			else{
				var point2 = Math.floor(Math.random() * (pointsArr2.length));
				y2 = pointsArr2[point2];
				var m = x2 + y2;
				if(m == 10){
					second2[j].innerHTML = "/";
					document.getElementById("playerTwoText").innerHTML = "Spare!";
					spare2 = 1;
				}
				else if (m > 10){
					spare2 = 0;
					checkTrowTwo2();
				}
				else{
					second2[j].innerHTML = pointsArr2[point2];
					spare2 = 0;
					document.getElementById("playerTwoText").innerHTML = " ";
				}

				if(strike2 == 1){
					total2 = total2 + m;
					main2[j - 1].innerHTML = total2;
					strike2 = 0;
					document.getElementById("playerTwoText").innerHTML = " ";
				}
			}

		},7000);
		setTimeout(function(){
			z2 = x2 + y2;
			main2[j].innerHTML = z2 + total2;
			total2 = total2 + z2;
			j++;

			if(counter >= roundCounter.length){
				if(strike2 == 1){
					document.getElementById("playerTwoText").innerHTML = " ";
					document.getElementsByClassName("bonus")[1].style.display = "flex";
					var point2 = Math.floor(Math.random() * (pointsArr2.length));
					bonus12 = pointsArr2[point2];
						if(bonus12 == 10){
							totalBonus2 = total2 + bonus12;
							document.getElementsByClassName("bonusfirstTrow")[1].innerHTML = bonus12;
							document.getElementsByClassName("bonusmainScore")[1].innerHTML = totalBonus2;
						}
						else{
							checkBonus2();
							function checkBonus2(){
								var point2 = Math.floor(Math.random() * (pointsArr2.length));
								bonus22 = pointsArr2[point2];
								var h = bonus12 + bonus22;
								if(h > 10){
									checkBonus2();
								}
								totalBonus2 = total2 + bonus12 + bonus22;
								document.getElementsByClassName("bonusfirstTrow")[1].innerHTML = bonus12;
								document.getElementsByClassName("bonussecondTrow")[1].innerHTML = bonus22;
								document.getElementsByClassName("bonusmainScore")[1].innerHTML = totalBonus2;
							}
						}
				}
				else if(spare2 == 1){
					document.getElementById("playerTwoText").innerHTML = " ";
					document.getElementsByClassName("bonus")[1].style.display = "flex";
					var point2 = Math.floor(Math.random() * (pointsArr2.length));
					bonus12 = pointsArr2[point2];
					totalBonus2 = total2 + bonus12;
					document.getElementsByClassName("bonusfirstTrow")[1].innerHTML = bonus12;
					document.getElementsByClassName("bonusmainScore")[1].innerHTML = totalBonus2;
				}
			winner();
			document.getElementById("two").style.color = "#9b9da0";
			}
		},8000);

		
		counter++;
		if(counter >= roundCounter.length){
			myStopFunction();
		}
	}
}

function winner(){
	if(totalBonus != 0){
		total = totalBonus;
	}
	else if(totalBonus2 != 0){
		total2 = totalBonus2;
	}
	
	if(total > total2){
		document.getElementById("playerOneText").innerHTML = "Winner!";
	}
	else if(total == total2) {
		document.getElementById("playerOneText").innerHTML = "Tie!";
		document.getElementById("playerTwoText").innerHTML = "Tie!";
	}
	else {
		document.getElementById("playerTwoText").innerHTML = "Winner!";
	}
}

function myStopFunction() {
    clearInterval(roundCount);
}

function restart(){
	location.reload();
}
