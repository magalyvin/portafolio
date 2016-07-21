$(document).ready(function(){
	$(".cuadro").hide();
	$(".abrir").click(function(){
		$(".cuadro").dialog({
		modal: true,
		show:{ effect: "blind",duration: 700},
		hide:{ effect: "explote",duration: 300}
	});
  });
	$(".dos").hide();
	$(".uno").click(function(){
		$(".dos").dialog({
		modal: true,
		show:{ effect: "blind",duration: 700},
		hide:{ effect: "explote",duration: 300}
	});
  });
	$(".cuatro").hide();
	$(".tres").click(function(){
		$(".cuatro").dialog({
		modal: true,
		show:{ effect: "blind",duration: 700},
		hide:{ effect: "explote",duration: 300}
	});
  });
	$(".seis").hide();
	$(".cinco").click(function(){
		$(".seis").dialog({
		modal: true,
		show:{ effect: "blind",duration: 700},
		hide:{ effect: "explote",duration: 300}
	});
  });

	$(".ocho").hide();
	$(".siete").click(function(){
		$(".ocho").dialog({
		modal: true,
		show:{ effect: "blind",duration: 700},
		hide:{ effect: "explote",duration: 300}
	});
  });
	$(".diez").hide();
	$(".nueve").click(function(){
		$(".diez").dialog({
		modal: true,
		show:{ effect: "blind",duration: 700},
		hide:{ effect: "explote",duration: 300}
	});
  });
	$(".doce").hide();
	$(".once").click(function(){
		$(".doce").dialog({
		modal: true,
		show:{ effect: "blind",duration: 700},
		hide:{ effect: "explote",duration: 300}
	});
  });
	$(".catorce").hide();
	$(".trece").click(function(){
		$(".catorce").dialog({
		modal: true,
		show:{ effect: "blind",duration: 700},
		hide:{ effect: "explote",duration: 300}
	});
  });

	

});