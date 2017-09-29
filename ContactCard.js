$(document).ready(function(){
    
        $('form').submit(function(){
            console.log($(this).serialize());
            return false;
        });
    
        $('.button').click(function(){
            data_array = $('form').serialize();
            var fName= jQuery('input[name="firstname"]').val();
            var lName= jQuery('input[name="lastname"]').val();
            var description= jQuery('input[name="description"]').val();
            $('table').append('<tr><td id="dname">'+fName+'</td><td>'+'<input type="submit" class="newBtn" value="Click Here for Description!">');
            
            jQuery('input[name="firstname"]').val("");
            jQuery('input[name="lastname"]').val("");
            jQuery('input[name="description"]').val("");
            jQuery('input[name="description2').val("");

        $(document).on('click', '.newBtn' , function(){
            $('table').append('<tr><td>'+ description +'</td><td>');
            $('#dname').hide();
            $('.newBtn').hide();
        });
    });

    });