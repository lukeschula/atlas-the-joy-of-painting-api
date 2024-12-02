# atlas-the-joy-of-painting-api

# Project Context

In this project, we are going to explore the idea of **ETL** (Extract, Transform, Load), which is the process of taking data from multiple unique sources, modifying them in some way, and then storing them in a centralized database.

This is a very common practice when collecting data from systems in order to utilize that data in another system. The data may come in various formats, such as:

- **CSV**
- **JSON**
- **XML**
- **API requests** with custom formats

Additionally, you might even have direct access to several databases with different, but related data, that you want to merge into a new database in order to gain insights from it.

---

# Presented Problem

Your local public broadcasting station has an overwhelming number of requests for information on **The Joy of Painting**. Their viewers want a website that allows them to filter the 403 episodes based on the following criteria:

### 1. Month of Original Broadcast
This will be useful for viewers who wish to watch paintings that were done during the same month of the year.

### 2. Subject Matter
This will be useful for viewers who wish to watch specific items being painted.

### 3. Color Palette
This will be useful for viewers who wish to watch specific colors being used in a painting.

---

Your local broadcasting station has already done some legwork to gather data, but it is currently spread out across multiple files and formats, making it unusable in its present form. They’ve also hired another team to build a front-end for viewers to filter episodes of *The Joy of Painting*.

Now, they’ve hired you to help with the following:

1. **Designing and building a database** to house the collected data in a way that is usable.
2. **Building an API** to access this data.

# Tasks

## 1. Design a Database

For this task, you are required to:

### 1.1. Create a Design Document Using UML

- Use **UML (Unified Modeling Language)** to create a design document for the database.
- The document should clearly illustrate the structure of the database, including:
  - **Entities**: Represented as classes (tables).
  - **Relationships**: How entities are connected (foreign keys, many-to-many, one-to-many).
  - **Attributes**: The columns in each table.
  - **Primary and Foreign Keys**: Clearly indicate which columns are primary keys and which are foreign keys.

### 1.2. Create SQL Scripts

- Write the **SQL scripts** required to create your database from scratch based on the design document.
- Ensure that the scripts:
  - Are **syntactically correct**.
  - Can be **executed locally** to create the database without errors.
  - Include **tables**, **constraints** (e.g., primary keys, foreign keys), and any other necessary components (e.g., indexes).

### 1.3. Database Platform

- You may choose any SQL database platform for this task. Examples include:
  - **MySQL**
  - **PostgreSQL**
  - **SQL Server**

---

By completing these steps, you'll have both a well-documented design and the functional SQL scripts required to set up the database from scratch.

# Task: Data Import and Cleanup

For this task, you are required to:

### 1. Write Custom Scripts for Data Import

- **Write custom scripts** in any programming language of your choice (e.g., Python, Java, Node.js, etc.) that will import data correctly from the provided data files into your newly created database.
- The scripts should:
  - Correctly parse and import data from various file formats (e.g., CSV, JSON, XML, etc.).
  - Match the data accurately to the correct fields in the database.

### 2. Handle Data Inconsistencies

- **Inspect and clean the data** to ensure accuracy before inserting it into the database. Some data files may contain:
  - Inconsistent formatting
  - Missing values
  - Duplicates
  - Incorrect entries (e.g., wrong dates, invalid IDs, etc.)

- **Data Cleanup**: Handle inconsistencies in one or more of the following ways:
  - Perform data validation and transformation within your script.
  - Clean or preprocess the data before storing it in the database (e.g., remove empty fields, fix date formats, etc.).
  - Use error handling techniques to flag and resolve inconsistencies where needed.

### 3. Ensure Data Accuracy

- It’s crucial that the data imported into the database is accurate. If data is not consistent or correct:
  - **Users will not be able to use the filters** (e.g., filtering by month of broadcast, subject matter, or color palette).
  - Incorrect data will hinder the functionality of the front-end application, which depends on accurate and structured data for filtering.

### 4. Verify Successful Import

- After running your scripts, verify that:
  - The data was correctly imported and is accessible in the database.
  - The records can be retrieved and filtered based on the specified criteria (month, subject, and color palette).

---

By following these steps, you will ensure that your data is both accurate and well-structured, allowing for effective filtering and smooth operation of the front-end application.


Here's how you could format the task description related to building the API in Markdown:

markdown
Copy code
# Task: API Development

For this task, you are required to develop an API that meets the following requirements:

### 1. API Must Run Locally

- The API must be **hosted locally** on your development machine or server.
- It should be able to **communicate with your database** to retrieve data and serve it to the user.

### 2. API Must Accept Parameters

- The API must be capable of accepting parameters in multiple ways, including:
  - **URL parameters** (e.g., `/episodes/123`)
  - **Query parameters** (e.g., `/episodes?month=January&subject=landscape`)
  - **POST data** in the body (e.g., for more complex queries or large datasets).