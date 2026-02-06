# MCP functions (overview)

This document summarizes the 11 available MCP tools and what they do.

## Flights
- `list_flights`: List flights for the authenticated user. Supports filters and pagination.
- `get_flight`: Get a single flight by its UUID.
- `create_flight`: Create a new flight segment. Requires `flight_date` and `flight_number`.
- `update_flight`: Update an existing flight by UUID. Only provided fields change.
- `delete_flight`: Permanently delete a flight by UUID.
- `update_flight_from_live_data`: Enrich an existing flight using live data sources; only fills empty fields.

## Trips
- `list_trips`: List trips for the authenticated user. Supports filters and pagination.
- `get_trip`: Get a single trip by UUID including associated flights.
- `create_trip`: Create a new trip. Requires `trip_name`, `start_date`, `end_date`.
- `update_trip`: Update an existing trip by UUID. Only provided fields change.
- `delete_trip`: Soft-delete a trip by UUID and unlink associated flights.
