describe('E2E: adding employees', function(){
		beforeEach(function(){
			browser.get('http://localhost:8000/src/index.html#/employee');
			ptor = protractor.getInstance();
		});

		it('should load add employee page', function(){
			var ele = by.id('add-employee');

			expect(ptor.isElementPresent(ele)).toBe(true);
		});

		it('message should appear when employee is added', function(){
			element(by.input('firstName')).sendKeys('luke');
			element(by.input('lastName')).sendKeys('skywalker');

			var elem = ptor.findElement(protractor.By.id('btn-add-employee'));
			elem.click();

			var elem = ptor.findElement(protractor.By.id('message'));
			;

			expect(elem.getText()).toBe("Employee Added");
		});

		it('message should appear when employee is saved', function(){
			element(by.input('firstName')).sendKeys('luke');
			element(by.input('lastName')).sendKeys('skywalker');

			var elem = ptor.findElement(protractor.By.id('btn-add-employee'));
			elem.click();

			var elem = ptor.findElement(protractor.By.id('btn-save-employee'));
			elem.click();

			var elem = ptor.findElement(protractor.By.id('message'));
			

			expect(elem.getText()).toBe("Employee List Saved");
		});

		it('saving an employee should show up in manage employee page', function(){
			element(by.input('firstName')).sendKeys('luke');
			element(by.input('lastName')).sendKeys('skywalker');

			var elem = ptor.findElement(protractor.By.id('btn-add-employee'));
			elem.click();

			var elem = ptor.findElement(protractor.By.id('btn-save-employee'));
			elem.click();

			var elem = ptor.findElement(protractor.By.id('link-manage'));
			elem.click();

			var elems = element.all(protractor.By.repeater('employee in employees').column('{{ employee.firstName }}'));
			elems.then(function(arr){
				arr[0].getText().then(function(text){
					expect(text).toEqual('luke skywalker');
				})
			})
						
		});
});