select e.first_name ,e.manager_id from employees e, employees m 
where e.manager_id=m.employee_id

select department_id,count(*) from employees
group by department_id


select first_name,last_name,department_id from employees
where department_id=(select department_id from departments
					where department_name='purchasing')	

select job_title, job_id from jobs
where job_id=(select job_id
				from employees
				where last_name='king')

select manager_id from employees
where last_name='king'

select e.last_name from employees e
where e.manager_id in(select m.employee_id from employees m
where m.manager_id in(select m1.manager_id from employees m1
where m1.employee_id=109))

