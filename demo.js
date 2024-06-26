$(function()
{

	if (!window['console'])
	{
		window.console = {};
		window.console.log = function(){};
	}

	var selectors = selectors = [ "date-range0", "date-range1", "date-range1-1", "date-range2", "date-range3", "date-range4", "date-range105", "date-range100", "date-range101", "date-range102", "date-range103", "date-range4-1", "date-range5", "date-range6", "date-range7", "date-range8", "date-range9", "two-inputs", "date-range10", "date-range12", "date-range13", "date-range13-2", "date-range14", "date-range14-2", "date-range15", "date-range16", "date-range17", "date-range18", "date-range19", "date-range20", "date-range21", "date-range22", "date-range23", "date-range5-2", "date-range24", "date-range24-2", "date-range24-3", "date-range25", "date-range26", "hotel-booking", "date-range50", "date-range51", "date-range52", "date-range53", "date-range54", "date-range55", ];
	var pickers = [];
	var elements = [];
	var opts = [];
	window['selectors'] = selectors;
	window['pickers'] = pickers;
	window['elements'] = elements;
	window['pickerOptions'] = opts;
	window['opts'] = opts;

	function getEls(selector, baseElement) {
		let base = document;
		let res = [];
		if(baseElement != null) {
			base = baseElement;
		}
		Log.d(`getEls(): Selector: '${selector}'\nBaseElement: `, base);
		if(base != null && !base.querySelectorAll) {
			let errtext = `getEls: base element does not have method querySelectorAll`;
			Log.w(errtext + `:\n`, base);
			let err1 = new Error(errtext);
			throw err1;
		}
		res = Array.from(base.querySelectorAll(selector));
		return res;
	}

	function getEl(selector, baseElement) {
		let base = document;
		let res = null;
		if(baseElement != null) {
			base = baseElement;
		}
		let els = getEls(selector, base);
		if(Array.isArray(els) && els.length > 0) {
			res = els[0];
		}
		return res;
	}

	var qsa = getEls;
	var qs = getEl;

	window['getEls'] = getEls;
	window['getEl'] = getEl;
	window['qsa'] = qsa;
	window['qs'] = qs;

	opts.push({});

    /**
	 * Assign an id to each of the demo elements for easy reference.
     */
	$('li.demo').each(function(index) {
        $(this).attr('id', 'demo' + (index + 1));
    });

	/*
	define a new language named "custom"
	*/

	$.dateRangePickerLanguages['custom'] =
	{
		'selected': 'Choosed:',
		'days': 'Days',
		'apply': 'Close',
		'week-1' : 'Mon',
		'week-2' : 'Tue',
		'week-3' : 'Wed',
		'week-4' : 'Thu',
		'week-5' : 'Fri',
		'week-6' : 'Sat',
		'week-7' : 'Sun',
		'month-name': ['January','February','March','April','May','June','July','August','September','October','November','December'],
		'shortcuts' : 'Shortcuts',
		'past': 'Past',
		'7days' : '7days',
		'14days' : '14days',
		'30days' : '30days',
		'previous' : 'Previous',
		'prev-week' : 'Week',
		'prev-month' : 'Month',
		'prev-quarter' : 'Quarter',
		'prev-year' : 'Year',
		'less-than' : 'Date range should longer than %d days',
		'more-than' : 'Date range should less than %d days',
		'default-more' : 'Please select a date range longer than %d days',
		'default-less' : 'Please select a date range less than %d days',
		'default-range' : 'Please select a date range between %d and %d days',
		'default-default': 'This is costom language'
	};

	$('#date-range0').dateRangePicker(opts[0]).on('datepicker-first-date-selected', function(event, obj)
	{
		/* This event will be triggered when first date is selected */
		console.log('first-date-selected',obj);
		// obj will be something like this:
		// {
		// 		date1: (Date object of the earlier date)
		// }
	})
	.on('datepicker-change',function(event,obj)
	{
		/* This event will be triggered when second date is selected */
		console.log('change',obj);
		// obj will be something like this:
		// {
		// 		date1: (Date object of the earlier date),
		// 		date2: (Date object of the later date),
		//	 	value: "2013-06-05 to 2013-06-07"
		// }
	})
	.on('datepicker-apply',function(event,obj)
	{
		/* This event will be triggered when user clicks on the apply button */
		console.log('apply',obj);
	})
	.on('datepicker-close',function()
	{
		/* This event will be triggered before date range picker close animation */
		console.log('before close');
	})
	.on('datepicker-closed',function()
	{
		/* This event will be triggered after date range picker close animation */
		console.log('after close');
	})
	.on('datepicker-open',function()
	{
		/* This event will be triggered before date range picker open animation */
		console.log('before open');
	})
	.on('datepicker-opened',function()
	{
		/* This event will be triggered after date range picker open animation */
		console.log('after open');
	});


	opts.push({
		startOfWeek: 'monday',
    	separator : ' ~ ',
    	format: 'DD.MM.YYYY HH:mm',
    	autoClose: false,
		time: {
			enabled: true
		}
	});
	$('#date-range1').dateRangePicker(opts[1]);
		$('#date-range1-1').dateRangePicker(
	{
		startOfWeek: 'monday',
		separator : ' ~ ',
		format: 'DD.MM.YYYY HH:mm',
		autoClose: false,
		time: {
			enabled: true
		},
		defaultTime: moment().startOf('day').toDate(),
		defaultEndTime: moment().endOf('day').toDate()
	});
	opts.push(null);
	$('#date-range2').dateRangePicker(opts[2]);

	opts.push({
		language:'cn'
	});
	$('#date-range3').dateRangePicker(opts[3]);

	opts.push({
		language:'en'
	});
	$('#date-range4').dateRangePicker(opts[4]);

	opts.push({
		showCustomValues: true,
		customValueLabel: 'Dynamic Ranges',
		customValues:
		[
			{
				name: 'MTD',
				value: 'Month To Date'
			},
			{
				name: 'YTD',
				value: 'Year To Date'
			}
		]
	});
	$('#date-range105').dateRangePicker(opts[5])

	opts.push({
		shortcuts : null,
		startOfWeek: 'sunday',
		language:'en',
		showShortcuts: true,
		customShortcuts:
		[
			//if return an array of two dates, it will select the date range between the two dates
			{
				name: 'this week',
				dates : function()
				{
					var start = moment().day(0).toDate();
					var end = moment().day(6).toDate();
					// start.setDate(1);
					// end.setDate(30);
					return [start,end];
				}
			},
			//if only return an array of one date, it will display the month which containing the date. and it will not select any date range
			{
				name: 'Oct 2014',
				dates : function()
				{
					//move calendars to show this date's month and next month
					var movetodate = moment('2014-10','YYYY-MM').toDate();
					return [movetodate];
				}
			}
		]
	});
	$('#date-range100').dateRangePicker(opts[6]).on('datepicker-apply',function(event,obj)
	{
		console.log(obj);
	});

	opts.push({
		showShortcuts: true,
		shortcuts :
		{
			'next-days': [3,5,7],
			'next': ['week','month','year']
		}
	});
	$('#date-range101').dateRangePicker(opts[7]);

	opts.push({
		showShortcuts: true,
		shortcuts :
		{
			'prev-days': [3,5,7],
			'prev': ['week','month','year'],
			'next-days':null,
			'next':null
		}
	});
	$('#date-range102').dateRangePicker(opts[8]);

	opts.push({
		autoClose: true
	});
	$('#date-range103').dateRangePicker(opts[9]);

	opts.push({
		language: 'custom'
	});
	$('#date-range4-1').dateRangePicker(opts[10]);

	opts.push({
		startDate: '2014-11-20'
	});
	$('#date-range5').dateRangePicker(opts[11]);

	opts.push({
		startDate: '2013-01-10',
		endDate: '2013-02-10'
	});
	$('#date-range6').dateRangePicker(opts[12]);

	opts.push({
		minDays: 3,
		maxDays: 7
	});
	$('#date-range7').dateRangePicker(opts[13]);

	opts.push({
		startOfWeek: 'monday'
	});
	$('#date-range8').dateRangePicker(opts[14]);

	opts.push({
		getValue: function()
		{
			return this.innerHTML;
		},
		setValue: function(s)
		{
			this.innerHTML = s;
		}
	});
	$('#date-range9').dateRangePicker(opts[15]);

	opts.push({
		separator : ' to ',
		getValue: function()
		{
			if ($('#date-range200').val() && $('#date-range201').val() )
				return $('#date-range200').val() + ' to ' + $('#date-range201').val();
			else
				return '';
		},
		setValue: function(s,s1,s2)
		{
			$('#date-range200').val(s1);
			$('#date-range201').val(s2);
		}
	});
	var endClick = function(evt) {
		console.log("endClick(): called with event:", evt);
		let drp = $('#two-inputs').data("dateRangePicker");
		let startDate = $("#date-range200"), endDate = $("#date-range201");
		let d1 = startDate != null ? startDate.val() : "";
		if(d1) {
			let end = '';
			if(endDate != null) {
				end = endDate.val();
				endDate.val('');
			}
			drp.setStart(d1);
			if(end) {
				dpr.resetMonthsView(end);
			}
		}
	};
	$('#two-inputs').dateRangePicker(opts[16]).on("datepicker-open", function(e) { console.log("datepicker-open: called with event:", e); });
	$('#date-range201').click(endClick);

	opts.push({
		format: 'dddd MMM Do, YYYY'  //more formats at http://momentjs.com/docs/#/displaying/format/
	});
	$('#date-range10').dateRangePicker(opts[17]);

	opts.push({
		inline:true,
		container: '#date-range12-container',
		alwaysOpen:true
	});
	$('#date-range12').dateRangePicker(opts[18]);

	opts.push({
		autoClose: true,
		singleDate : true,
		showShortcuts: false
	});
	$('#date-range13').dateRangePicker(opts[19]);

	opts.push({
		autoClose: true,
		singleDate : true,
		showShortcuts: false,
		singleMonth: true
	});
	$('#date-range13-2').dateRangePicker(opts[20]);

	opts.push({
		batchMode: 'week',
		showShortcuts: false
	});
	$('#date-range14').dateRangePicker(opts[21]);

	opts.push({
		batchMode: 'week-range',
		showShortcuts: false
	});
	$('#date-range14-2').dateRangePicker(opts[22]);

	opts.push({
		showShortcuts: false,
		beforeShowDay: function(t)
		{
			var valid = !(t.getDay() == 0 || t.getDay() == 6);  //disable saturday and sunday
			var _class = '';
			var _tooltip = valid ? '' : 'weekends are disabled';
			return [valid,_class,_tooltip];
		}
	});
	$('#date-range15').dateRangePicker(opts[23]);

	opts.push({
		showShortcuts: false,
		format: 'YYYY-MM-DD'
	});
	$('#date-range16').dateRangePicker(opts[24]).on('datepicker-change', function(evt, obj) {
		alert('date1: ' + obj.date1 + ' / date2: ' + obj.date2);
	});

	$('#date-range16-open').click(function(evt)
	{
		evt.stopPropagation();
		$('#date-range16').data('dateRangePicker').open();
	});

	$('#date-range16-close').click(function(evt)
	{
		evt.stopPropagation();
		$('#date-range16').data('dateRangePicker').close();
	});

	$('#date-range16-set').click(function(evt)
	{
		evt.stopPropagation();
		$('#date-range16').data('dateRangePicker').setDateRange('2013-11-20','2014-08-25');
	});

	$('#date-range16-set-silent').click(function(evt)
	{
		evt.stopPropagation();
		$('#date-range16').data('dateRangePicker').setDateRange('2014-11-03','2015-02-12', true);
	});

	$('#date-range16-clear').click(function(evt)
	{
		evt.stopPropagation();
		$('#date-range16').data('dateRangePicker').clear();
	});

	$('#date-range16-destroy').click(function(evt)
	{
		evt.stopPropagation();
		$('#date-range16').data('dateRangePicker').destroy();
	});

	$('#date-range16-reset').click(function(evt)
    {
		evt.stopPropagation();
		$('#date-range16').data('dateRangePicker').resetMonthsView();
    });

	opts.push({
		stickyMonths: true,
		showShortcuts: false
	});
	$('#date-range17').dateRangePicker(opts[25]);

	opts.push({
		customTopBar: 'Foo Bar'
	});
	$('#date-range18').dateRangePicker(opts[26]);

	opts.push({
		extraClass: 'date-range-picker19'
	});
	$('#date-range19').dateRangePicker(opts[27]);

	opts.push({
		hoveringTooltip: false
	});
	$('#date-range20').dateRangePicker(opts[28]);

	opts.push({
		hoveringTooltip: function(days)
		{
			var D = ['','<span style="white-space:nowrap;">Please select another date</span>','Two', 'Three','Four','Five'];
			return D[days] ? D[days] : days+' days';
		}
	});
	$('#date-range21').dateRangePicker(opts[29]);

	opts.push({
		showDateFilter: function(time, date)
		{
			return '<div style="padding:0 5px;">\
						<span style="font-weight:bold">'+date+'</span>\
						<div style="opacity:0.3;">$'+Math.round(Math.random()*999)+'</div>\
					</div>';
		}
	});
	$('#date-range22').dateRangePicker(opts[30]);

	opts.push({
		singleMonth: true,
		showShortcuts: false,
		showTopbar: false
	});
	$('#date-range23').dateRangePicker(opts[31]);

	opts.push({
		minDays:3,
		maxDays:7
	});
	$('#date-range5-2').dateRangePicker(opts[32]);

	opts.push({
		showWeekNumbers: true
	});
	$('#date-range24').dateRangePicker(opts[33]);

	opts.push({
		showWeekNumbers: true,
		startOfWeek:'monday'
	});
	$('#date-range24-2').dateRangePicker(opts[34]);

	opts.push({
		showWeekNumbers: true,
		getWeekNumber: function(day)
		{
			var fiscalYearStart = moment('2015-08-16','YYYY-MM-DD');
			var daysOffset = parseInt(fiscalYearStart.format('DDD'),10);
			return moment(day).add( -1*daysOffset, 'days').format('W');
		}
	});
	$('#date-range24-3').dateRangePicker(opts[35]);

	opts.push({
		selectForward: true
	});
	$('#date-range25').dateRangePicker(opts[36]);

	opts.push({
		selectBackward: true
	});
	$('#date-range26').dateRangePicker(opts[37]);

	opts.push({
		startDate: new Date(),
		selectForward: true,
		beforeShowDay: function(t)
		{
			var valid = !(t.getDay() == 0 || t.getDay() == 6);  //disable saturday and sunday
			var _class = '';
			var _tooltip = valid ? '' : 'sold out';
			return [valid,_class,_tooltip];
		}
	});
	$('#hotel-booking').dateRangePicker(opts[38]);


	opts.push({
		customOpenAnimation: function(cb)
		{
			$(this).fadeIn(300, cb);
		},
		customCloseAnimation: function(cb)
		{
			$(this).fadeOut(300, cb);
		}
	});
	$('#date-range50').dateRangePicker(opts[39]);

	opts.push({
        customArrowPrevSymbol: '<i class="fa fa-arrow-circle-left"></i>',
        customArrowNextSymbol: '<i class="fa fa-arrow-circle-right"></i>'
	});
	$('#date-range51').dateRangePicker(opts[40]);

	opts.push({
		monthSelect: true,
		yearSelect: true
	});
	$('#date-range52').dateRangePicker(opts[41]);

	opts.push({
		monthSelect: true,
		yearSelect: [1900, moment().get('year')]
	});
	$('#date-range53').dateRangePicker(opts[42]);

	opts.push({
        monthSelect: true,
        yearSelect: function(current) {
            return [current - 10, current + 10];
        }
    });
    $('#date-range54').dateRangePicker(opts[43]);

	opts.push({
		monthSelect: true,
        yearSelect: true,
        startDate: moment().subtract(3, 'months').format('YYYY-MM-DD'),
        endDate: moment().endOf('day').format('YYYY-MM-DD'),
	});
	$('#date-range55').dateRangePicker(opts[44]);

	for(let sel of selectors) {
		let selector = `#${sel}`;
		let el1 = $(selector);
		elements.push(el1);
		pickers.push(el1.data("dateRangePicker"));
	}
});
