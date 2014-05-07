dropInPage
==========

Landing page for PRIMO

Install in  (/exlibris/primo/p4_1/ng/primo/home/system/tomcat/search/webapps/ROOT)

* fe_web
* cd ../ROOT



Also add this rule to WEB-INF/urlrewrite.xml if you want an indication of which frontend is accessed


    <rule>
        <from>.*</from>
        <set type="response-header" name="X-PRIMO-FE-ENVIRONMENT">2</set>
    </rule>

