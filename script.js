// Code goes here
$(document).ready(function(){
$('#search').keydown(function(){
$.getJSON("pepper.json",function(data){
var search = $('#search').val();
var regex = new RegExp(search, 'i');
var output;
$.each(data, function(key, val){
if((val.id.search(regex) != -1 ) || (val.Name.search(regex) != -1)){
    output += "<tr>";
    output += "<td id='"+key+"'>"+val.id+"</td>";
    output += "<td id='"+key+"'>"+val.Name+"</td>";
    output += "<td id='"+key+"'>"+val.Substanzname+"</td>";
    output += "<td id='"+key+"'>"+val.Tagesdosis+"</td>";
    output += "<td id='"+key+"'>"+val.Dosierung+"</td>";
    output += "<td id='"+key+"'>"+val.Startdosis+"</td>";
    output += "<td id='"+key+"'>"+val.Dosisreduktion+"</td>";
    output += "<td id='"+key+"'>"+val.Tageshochstdosis+"</td>";
    output += "<td id='"+key+"'>"+val.Nebenwirkungen+"</td>";
    output += "<td id='"+key+"'>"+val.Antidot+"</td>";
    output += "<td id='"+key+"'>"+val.Kommentarefix+"</td>";
    output += "<td id='"+key+"'>"+val.Kommentarejedes+"</td>";
    output += "</tr>";
  }
});
$('tbody').html(output);
});
});
});

var clients =[
	{
	  "id":"1",
		"Name": "Lixiana ",
		"Substanzname": "Edoxaban ",
		"Substanzklasse ": "Antikoagulation",
		"Tagesdosis": "60mg 1 Mal täglich",
		"Dosierung": "",
		"Startdosis": "",
		"Dosisreduktion": "auf 30mg 1 Mal täglich bei G F R 15-50 ml/min; bei Gewicht <60 kg; bei Verschreibung von Dronedaron",
		"Tageshochstdosis": " Cyclosporin",
		"Nebenwirkungen": " Erythromycin oder Ketoconazol",
		"Antidot": "",
		"Kontraindikation": "Leberenzymanstieg",
		"Kommentarefix": "",
		"Kommentare edes": ""
	},
	{
	  "id":"2",
		"Name": "",
		"Substanzname": "",
		"Substanzklasse ": "",
		"Tagesdosis": "",
		"Dosierung": "",
		"Startdosis": "",
		"Dosisreduktion": "",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "",
		"Antidot": "",
		"Kontraindikation": "",
		"Kommentarefix": "",
		"Kommentarejedes": "Ich nehme an"
	},
	{
	  "id":"3",
		"Name": "Xarelto",
		"Substanzname": "Rivaroxaban",
		"Substanzklasse ": "Antikoagulation",
		"Tagesdosis": "- bei Pulmonalembolie oder tiefer Beinvenenthrombose: 15mg 2 Mal täglich über 3 Wochen",
		"Dosierung": " danach 20mg 1 Mal täglich",
		"Startdosis": "",
		"Dosisreduktion": "",
		"Tageshochstdosis": "auf 15mg 1 Mal täglich bei G F R 15-50ml/min ",
		"Nebenwirkungen": "",
		"Antidot": "",
		"Kontraindikation": "",
		"Kommentarefix": "",
		"Kommentarejedes": ""
	},
	{
	  "id":"4",
		"Name": "",
		"Substanzname": "",
		"Substanzklasse ": "",
		"Tagesdosis": "- bei nicht-valvulärem Vorhofflimmern: 20mg 1 Mal täglich",
		"Dosierung": "",
		"Startdosis": "",
		"Dosisreduktion": "",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "",
		"Antidot": "",
		"Kontraindikation": "",
		"Kommentarefix": "",
		"Kommentarejedes": ""
	},
	{
	   "id":"5",
		"Name": "Pradaxa",
		"Substanzname": "Dabigatran",
		"Substanzklasse ": "Antikoagulation",
		"Tagesdosis": "150 mg 2 Mal täglich",
		"Dosierung": "",
		"Startdosis": "",
		"Dosisreduktion": "auf 110 mg 2 Mal täglich bei Patienten über 80 oder bei Einnahme von Verapami oder; bei Kreatininclearance 30-50 ml/min",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "",
		"Antidot": "Idarucizumab",
		"Kontraindikation": "",
		"Kommentarefix": "",
		"Kommentarejedes": ""
	},
	{
	  "id":"6",
		"Name": "Eliquis",
		"Substanzname": "Apixaban",
		"Substanzklasse ": "Antikoagulation",
		"Tagesdosis": "5 mg 2 Mal täglich",
		"Dosierung": "",
		"Startdosis": "",
		"Dosisreduktion": "2",
		"Tageshochstdosis": "5 mg 2 Mal täglich bei G F R 15 bis 30 ml / min oder bei zwei der drei folgenden Kriterien: Kreatinin ≥ 1",
		"Nebenwirkungen": "5",
		"Antidot": " Alter > 80",
		"Kontraindikation": " Gewicht < 60 ",
		"Kommentarefix": "",
		"Kommentarejedes": ""
	},
	{
	  "id":"7",
		"Name": "Praluent",
		"Substanzname": "Alirocumab",
		"Substanzklasse ": "Lipidsenker",
		"Tagesdosis": "",
		"Dosierung": "75 mg subcutan alle 2 Wochen oder 150 mg subcutan alle 2 Wochen bei LDL > 160 mg/dl",
		"Startdosis": "",
		"Dosisreduktion": "",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "Schnupfen-ähnliche Symptome",
		"Antidot": "",
		"Kontraindikation": "G F R < 30 ml/min",
		"Kommentarefix": "",
		"Kommentarejedes": "Ich nehme an"
	},
	{
	  "id":"8",
		"Name": "",
		"Substanzname": "",
		"Substanzklasse ": "",
		"Tagesdosis": "",
		"Dosierung": "",
		"Startdosis": "",
		"Dosisreduktion": "",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "",
		"Antidot": "",
		"Kontraindikation": "",
		"Kommentarefix": "",
		"Kommentarejedes": "Ich nehme an ihr wisst"
	},
	{
	  "id":"9",
		"Name": "Repatha",
		"Substanzname": "Evolucumab",
		"Substanzklasse ": "Lipidsenker",
		"Tagesdosis": "",
		"Dosierung": "140 mg subkutan alle 2 Wochen",
		"Startdosis": "",
		"Dosisreduktion": "",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "",
		"Antidot": "",
		"Kontraindikation": "schwere Leberinsuffizienz",
		"Kommentarefix": " G F R < 30 ml/min",
		"Kommentarejedes": ""
	},
	{
	  "id":"10",
		"Name": "",
		"Substanzname": "",
		"Substanzklasse ": "",
		"Tagesdosis": "",
		"Dosierung": "",
		"Startdosis": "",
		"Dosisreduktion": "",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "",
		"Antidot": "",
		"Kontraindikation": "",
		"Kommentarefix": "",
		"Kommentarejedes": "Ich nehme an ihr wisst"
	},
	{
	  "id":"11",
		"Name": "Ferinject",
		"Substanzname": "Eisencarboxymaltose",
		"Substanzklasse ": "Eisensubstitution",
		"Tagesdosis": "",
		"Dosierung": "einmalig 1000 mg über mindestens 15 Min in maximal 250 ml N A C L",
		"Startdosis": "",
		"Dosisreduktion": "auf 500 mg bei Gewicht unter 50 kg",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "Hypophosphatämie",
		"Antidot": " allergische Reaktion",
		"Kontraindikation": " Flush",
		"Kommentarefix": "",
		"Kommentarejedes": "Hämosiderose"
	},
	{
	  "id":"12",
		"Name": "Procoralan",
		"Substanzname": "Ivabradin",
		"Substanzklasse ": "Antiarrhythmikum",
		"Tagesdosis": "5 mg 2 Mal täglich",
		"Dosierung": " bei Patienten über 75 Jahre 2",
		"Startdosis": "5 mg 2 Mal täglich",
		"Dosisreduktion": "",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "",
		"Antidot": "7",
		"Kontraindikation": "5 mg 2 Mal täglich",
		"Kommentarefix": "",
		"Kommentarejedes": ""
	},
	{
	  "id":"13",
		"Name": "Vastarel",
		"Substanzname": "Trimetazidin",
		"Substanzklasse ": "Antianginosum",
		"Tagesdosis": "",
		"Dosierung": "35 mg 2 Mal täglich",
		"Startdosis": "",
		"Dosisreduktion": "",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "gastrointestinale Beschwerden",
		"Antidot": "",
		"Kontraindikation": "Parkinson",
		"Kommentarefix": " restless legs",
		"Kommentarejedes": " Tremor"
	},
	{
	  "id":"14",
		"Name": "Veltassa",
		"Substanzname": "Patiromer",
		"Substanzklasse ": "Kaliumsenker",
		"Tagesdosis": "8",
		"Dosierung": "4 g 1 Mal täglich",
		"Startdosis": "",
		"Dosisreduktion": "",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "25",
		"Antidot": "2 g 1 Mal täglich",
		"Kontraindikation": "gastrointestinale Beschwerden",
		"Kommentarefix": " Hypomagnesämie",
		"Kommentarejedes": ""
	},
	{
	  "id":"15",
		"Name": "Jardiance",
		"Substanzname": "Empagliflozin",
		"Substanzklasse ": "Antidiabetikum",
		"Tagesdosis": "10 mg 1 Mal täglich",
		"Dosierung": "",
		"Startdosis": "",
		"Dosisreduktion": "",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "Ketoazidose",
		"Antidot": " Harnwegsinfektion",
		"Kontraindikation": " Genitaltraktinfektion",
		"Kommentarefix": "",
		"Kommentarejedes": ""
	},
	{
	  "id":"16",
		"Name": "",
		"Substanzname": "",
		"Substanzklasse ": "",
		"Tagesdosis": "",
		"Dosierung": "",
		"Startdosis": "",
		"Dosisreduktion": "",
		"Tageshochstdosis": "",
		"Nebenwirkungen": "",
		"Antidot": "",
		"Kontraindikation": "",
		"Kommentarefix": "",
		"Kommentarejedes": "Ältere Patienten sollten bei Einnahme von Jardiance viel trinken "
	}
	
	
];
 
   

$(document).ready(function(){
    $("#jsGrid").jsGrid({
        width: "1900px",
        height: "700px",
 
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
 
        data: clients,
 
        fields: [
            { name: "id", type: "text", width: 150, validate: "required" },
            { name: "Name", type: "number", width: 50 },
            { name: "Substanzname", type: "text", width: 200 },
            { name: "Substanzklasse", type: "text", width: 150, validate: "required" },
            { name: "Tagesdosis", type: "number", width: 50 },
            { name: "Dosierung", type: "text", width: 200 },
            { name: "Startdosis", type: "text", width: 150, validate: "required" },
            { name: "Dosisreduktion", type: "number", width: 50 },
            { name: "Tageshöchstdosis", type: "text", width: 200 },
            { name: "Nebenwirkungen", type: "number", width: 50 },
            { name: "Antidot", type: "text", width: 200 },
            { name: "Kontraindikation", type: "text", width: 150, validate: "required" },
            { name: "Kommentarefix", type: "number", width: 50 },
            { name: "Kommentarejedes", type: "text", width: 200 },
            { type: "control" }
        ]
    });
});
