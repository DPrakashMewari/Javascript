<H3>AJAX</H3>

<B>
AJAX stands for aysnchronus javascript and xml 
ajax helps in fetching data asynchronously without interfering with the existing page
No page reload/refresh..
</B>

HOW IT WORKS?

- AJAX uses XMLHttpRequest Object also called xhr object to achive this
- DATA can be transfered in any format and protocol 
- Easy : We can get data or send data in any format txt,json,html

-- .ajax() method : will offer all ajax functionalities

More Method...
- $.get()
- $.getScript()
- $.getJSON()
- $.post()
- $().load()

<br>
<span> Must Know : Synchronous = happens at the same time. Asynchronous = doesn't happen at the same time.
</span>
<br>

<i>In JQUERY we require some some ajax params
</i>


Data types: 
text,html,script 
json,jsonp:(used when json data from diff domain)
xml.

-- ajax Function
You CAN Call it function 

* async : Accept True/False,Default is true,false will make it synchronusly 
* cache : Used to cache our response if available.
* complete : Triggers a callback function,regardless of success or failure.
* Data : Data to be sent to server it,it can be either string ot object
* DataType: This Specifies the type of data you expect from server
* error : Call back function request get an error
* jsonp : Here we need to specifiy callback name to send jsonp request
* sucess: A callback function is run if the request is success.
* timeout: specifies the time in milliseconds to wait and consider as the request is a failure
* url : request url (The url option is the only mandatory property in the configuration object,all other properties are optional )







