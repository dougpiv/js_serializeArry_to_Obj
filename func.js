var formdata = $("#myform").serializeArray();
var data = {};
$(formdata ).each(function(index, obj){
    data[obj.name] = obj.value;
});
