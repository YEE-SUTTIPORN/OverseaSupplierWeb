# OverseaSupplierWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# OverseaSupplierWeb

# ฝาก

```bash
DECLARE @Today DATE = CAST(GETDATE() AS DATE);

-- ทดสอบ
SET @Today = '2025/07/07';

IF OBJECT_ID(N'tempdb..#TABLE') IS NOT NULL
    DROP TABLE #TABLE;
CREATE TABLE #TABLE
(
    HolidayDate DATE
);

INSERT INTO #TABLE
(
    HolidayDate
)
VALUES
('2025-05-01'),
('2025-05-02'),
('2025-05-18'),
('2025-05-19'),
('2025-05-24'),
('2025-05-25'),
('2025-06-01'),
('2025-06-03'),
('2025-06-07'),
('2025-06-08')

---------------------------------------------------------------------
-- Daily
---------------------------------------------------------------------
IF NOT EXISTS (SELECT TOP 1 1 FROM #TABLE WHERE HolidayDate = @Today)
BEGIN
    SELECT 'Daily Generated';
END;
ELSE
BEGIN
    RETURN;
END;






---------------------------------------------------------------------
-- Weekly
---------------------------------------------------------------------
DECLARE @WeekStart DATE = DATEADD(DAY, - (DATEPART(WEEKDAY, @Today) + @@DATEFIRST - 2) % 7, @Today);

WHILE EXISTS (SELECT 1 FROM #TABLE WHERE HolidayDate = @WeekStart)
BEGIN
    SET @WeekStart = DATEADD(DAY, 1, @WeekStart);
END;
IF @Today = @WeekStart
BEGIN
    SELECT 'Weekly Generated';
END;




---------------------------------------------------------------------
-- Monthly
---------------------------------------------------------------------
DECLARE @FirstDay DATE = DATEFROMPARTS(YEAR(@Today), MONTH(@Today), 1);

WHILE EXISTS (SELECT 1 FROM #TABLE WHERE HolidayDate = @FirstDay)
BEGIN
    SET @FirstDay = DATEADD(DAY, 1, @FirstDay);
END;

IF @Today = @FirstDay
BEGIN
    SELECT 'Monthly Generated';
END;
```
