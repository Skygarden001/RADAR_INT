import psycopg2
config = psycopg2.connect(database="postgres",
                        host="localhost",
                        user="postgres",
                        password="Skyradar070397",
                        port="5432")
cursor = config.cursor()
try:
    # Establish a connection to the PostgreSQL database
    connection = config
    print("Connected to the database!")
    #Create a table
    cursor = connection.cursor()
    create_table_query = """
    CREATE TABLE IF NOT EXISTS data_satellite (
        id serial PRIMARY KEY,
        id_norard integer[],
        satellite VARCHAR(255)[],
        epoch TIMESTAMP[],
        date_and_time TIMESTAMP[],
        height FLOAT[], 
        velocity FLOAT[],
        Inclination FLOAT[], 
        eccentricity FLOAT[], 
        period FLOAT[], 
        mean_anomaly FLOAT[], 
        argument_of_eriapsis FLOAT[], 
        longitude_of_the_ascending_node FLOAT[], 
        true_anomaly FLOAT[],
        descriptions VARCHAR(255)[]
    );
    """
    cursor.execute(create_table_query)
    connection.commit()
    print("Table created successfully!")

    # Insert data into the table
    data_to_insert = [58858]
    insert_query = """
    INSERT INTO data_satellite (id_norard)
    VALUES (%s);
    """
    cursor.execute(insert_query, (data_to_insert,)) 
    connection.commit()
    print("Data inserted successfully!")
    # Define the DELETE statement to remove data from the table
    delete_query = f"""
    DELETE FROM data_satellite;
    """
    # Execute the DELETE statement
    cursor.execute(delete_query)
    # Commit the transaction
    connection.commit()
    print("Data deleted successfully!")
except psycopg2.Error as e:
    print("Error:", e)
# finally:
#     if connection:
#         connection.close()
