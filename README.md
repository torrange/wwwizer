# wwwizer
wwwizer clone in NodeJS

1. Ensure NodeJS is installed and clone this repo

2. Run the wwwizer server:
  
  sudo nodejs wwwizer.js &

3. Create an A-Record for your naked domain in your DNS zonefile; 
   Point to the IP address where your wwwizer.js process is running, like so:

    value: @
    destination:  #your-server-external ip
    
    
After the A-Record has propagated, [get] requests made to your naked-domain are redirected to www.{{naked-domain}}

Simple.
