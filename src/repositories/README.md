# Repository

Consider a repository as a storage of some data that can be managed (read/write).

This package is intended for linking modules to each other.
For example `authentication` module requires `AuthenticationRepository` to be implemented,
so it is possible to tell angular to use either *http-based* auth or *firebase-based* auth. 
