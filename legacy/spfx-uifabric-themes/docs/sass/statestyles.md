# State styles
The following method will helps to create state styles for user notifications.q

## stateStyle($state) 
This functions returns the matching Office UI Fabric colors for the following states

* alert
* error
* info
* servere
* success

To use this function simplay pass in the string values.

```scss
.custErrorMsg{
  padding: 0 1em;
  line-height: 2em;
  @include stateStyle('error');
}
```
This function can create the following status fields for example:
![stateStyle Sample Results][office.theme.functions.statestyle]

[office.theme.functions.statestyle]: ../assets/office.theme.functions.statestyle.png "Possible stateStyle results"
